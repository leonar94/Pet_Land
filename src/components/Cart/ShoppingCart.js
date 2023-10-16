import { useReducer, useEffect, useState } from "react"
import { shoppingInitialState } from "@/reducer/shoppingInitianState"
import { shoppingReducer } from "@/reducer/shoppingReducer"
import { TYPES } from "@/actions/actions"
import ProductCard from "./ProductCard"
import axios from "axios"
import CartItem from "./CartItem"
import CartIcon from "./CartIcon"


const ShoppingCart = () => {

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState,);

  const {products, cart} = state;

  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:8000/products",
      cart: "http://localhost:8000/cart"
    }

    const responseProducts = await axios.get(ENDPOINTS.products),
           responseCart = await axios.get(ENDPOINTS.cart);

    const productsList = await responseProducts.data,
    cartItems = await responseCart.data;

    dispatch({type: TYPES.READ_STATE, payload: {
      products: productsList,
      cart: cartItems
    }})
  }

  useEffect(() => {
    updateState()
  }, [])
  

  const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})
  const [count, setCount] = useState(0);
  const deleteFromCart = (id, all) => {
    if (all) {
      dispatch({type: TYPES.REMOVE_ALL_ITEMS , payload: id})
    } else {
      dispatch({type: TYPES.REMOVE_ONE_ITEM, payload: id})
    }

  }
  const clearCart = () => dispatch ({type: TYPES.CLEAR_CART})

  return (
    <>
      <h2>Carrito de compras</h2>
      <h3>Productos </h3>
      
      <CartIcon/>
      <div className="box grid-responsive">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart = {addToCart}/>
        ))}

     

      </div>
     
      <button onClick={toggleCarrito}>
      {mostrarCarrito ? 'Ocultar Carrito' : 'Ver Carrito'}
      </button>
      {mostrarCarrito && (
        <div>
        <h3>Carrito</h3>
              <div className="box">
                  {
                    cart.map((item,i) => <CartItem key={i} item={item} deleteFromCart = {deleteFromCart}/>)
                  }
                  <button onClick={clearCart}>Limpiar Carrito</button>
              </div>
              
        </div>
      )}
     
      
    </>
  );
}; 

export default ShoppingCart
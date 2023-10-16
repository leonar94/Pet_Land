import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const CartItem = ({item, deleteFromCart}) => {

  const {img,alt,title,text,price, quantity, id, bgcolor, totalItems} = item; 

  

  return (
    
    <>
    <h2>{totalItems}</h2>
      <figure className="cart-item">
        <Image src={img}  alt={alt} width={200} height={150}></Image>
        <figcaption>
        <h3>{title}</h3>
      </figcaption>
      <p>{text}</p>
      <h5>$ {price} x {quantity} = {price * quantity}</h5>
      
      <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button>
      <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
      
      </figure>

      <style jsx>{`
         figure {
          min-width: 200px;
          max-width: 200px;
          height: 320px;
          border: 2px solid black;
          margin-left: 20px;
          margin-top: 10px;
          background-color: #ffc259;
          margin: 50px
         }

         Image {
          width: 100%;
          height: 50%;
          object-fit: cover
         }

         h3, p {
          text-align: center
         }

      `  
        }</style>
    
    </>
  )


  //   const {id, name, price, quantity}= item;

  // return (
  //   <div className="cart-item">
  //       <h4>{name}</h4>
  //       <h5>$ {price} x {quantity} = {price * quantity}</h5>
  //       <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button>
  //       <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
  //   </div>
  // );
};

export default CartItem;


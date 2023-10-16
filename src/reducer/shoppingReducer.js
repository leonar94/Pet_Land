import { TYPES } from "@/actions/actions";
import { shoppingInitialState } from "./shoppingInitianState";


export function shoppingReducer (state,action) {
    
    switch (action.type) {

        case TYPES.READ_STATE: {
            return {
                ...state, 
                products: action.payload.products,
                cart: action.payload.cart
            }
        }

        case TYPES.ADD_TO_CART: {
            const newItem = state.products.find(product => product.id === action.payload)

            const itemInCart = state.cart.find(item => item.id === newItem.id)
            const totalItems = state.cart.reduce((total, item) => total + item.quantity, 1);

            return itemInCart
            ? {
                ...state,
                cart: state.cart.map(item =>
                    item.id === newItem.id
                    ? {...newItem, quantity: item.quantity + 1, totalItems: totalItems}
                    : item 
                ),
                totalItems: totalItems
                
            }
            :
            {
                ...state,
                cart: [...state.cart, {...newItem, quantity:1, totalItems: totalItems}],
                totalItems: totalItems
            }
            
        }
        
        case TYPES.REMOVE_ONE_ITEM: {
            const itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map(item =>
                    item.id === itemToDelete.id
                    ? {...itemToDelete, quantity: item.quantity - 1}
                    : item
                )
            }
            :
            {
                ...state,
                cart: [...state.cart.filter(item => item.id !== itemToDelete.id)]
            }
        }
        
        case TYPES.REMOVE_ALL_ITEMS: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
                
            }
        }

        case TYPES.CLEAR_CART:
            return shoppingInitialState
        
        default:
        return state
    }
}

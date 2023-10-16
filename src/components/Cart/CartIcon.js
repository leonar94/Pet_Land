import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';




const CartIcon = () => {



  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
   
  
    setCount(count + 1);
  };

  return (

    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      {count > 0 && <span className="cart-count">{count}</span>}
      <button onClick={handleAddToCart}>Agregar</button>
    </div>
    
  );
};

export default CartIcon;
import { useState } from "react";


const AddToCartButton = () => {
    const [count, setCount] = useState(0);
    const [isAdded, setIsAdded] = useState(false);
  
    const handleClick = () => {
      if (!isAdded) {
        setCount(1);
        setIsAdded(true);
      } else {
        setCount(count + 1);
      }
    };
  
    return (
      <div>
        <button onClick={handleClick}>
          {isAdded ? `Agregar (${count})` : 'Agregar al carrito'}
        </button>
      </div>
    );
  };
  
  export default AddToCartButton;
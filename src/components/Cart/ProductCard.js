import Image from "next/image";
import { useState } from 'react';

const ProductCard = ({product, addToCart}) => {

    const {img,alt,title,text,price, id, bgcolor}= product;


  return (
    <>

      <figure className="product-card">
        <Image src={img}  alt={alt} width={200} height={150}></Image>
        <figcaption>
        <h3>{title}</h3>
      </figcaption>
      <p>{text}</p>
      <h5>$ {price}</h5>
      <button onClick={() => {addToCart(id)}}>Agregar</button>

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

    
    // <div className="product-card">
    //     <h4>{name}</h4>
    //     <h5>$ {price}</h5>
    //     <button onClick={() => addToCart(id)}>Agregar</button>
    // </div>
  )
}

export default ProductCard
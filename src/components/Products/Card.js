import Image from 'next/image';
import Button from './Button'

const Card = ({producto}) => {

  const {img,alt,title,text,price, bgcolor} = producto; 
  // destructuramos el objeto destino para usar las propiedades en el return 
  
  console.log(producto)

  return (
    <>
      <figure>
        <Image src={img}  alt={alt} width={200} height={150}></Image>
        <figcaption>
        <h3>{title}</h3>
      </figcaption>
      <p>{text}</p>
      <p>{price}</p>
      <Button bgcolor={bgcolor}/>
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
}

export default Card

import Card from './Card'
import Image from 'next/image'

const productos = [
  {
    id: 1,
    img: "/images/toy_bone.jpg",
    alt: "Juguetes",
    title: "Juguetes perro",
    text: "Hueso para mordida",
    bgcolor: "#9bcefa",
    price: "10$",
  },
  {
    id: 2,
    img: "/images/toy_pelota.jpg",
    alt: "Juguetes",
    title: "Juguetes perro",
    text: "Pelota",
    bgcolor: "#9bcefa",
  },
  {
    id: 3,
    img: "/images/toy_soga.jpg",
    alt: "Juguetes",
    title: "Juguetes perro",
    text: "Soga",
    bgcolor: "#9bcefa",
  },
  {
    id: 4,
    img: "/images/toy_kong.jpg",
    alt: "Juguetes",
    title: "Juguetes perro",
    text: "Kong",
    bgcolor: "#9bcefa",
  },
  {
    id: 5,
    img: "/images/food_natural.jpg",
    alt: "Alimento",
    title: "Alimento",
    text: "Comida natural",
    bgcolor: "#9bcefa",
  },
  {
    id: 6,
    img: "/images/food_croquetas.jpg",
    alt: "Alimento",
    title: "Alimento",
    text: "Croquetas para perros",
    bgcolor: "#9bcefa",
  },
  {
    id: 7,
    img: "/images/food_humedo_cat.jpg",
    alt: "Alimento",
    title: "Alimento",
    text: "Comida humeda para gatos",
    bgcolor: "#9bcefa",
  },
  {
    id: 8,
    img: "/images/dog_food_humeda.jpg",
    alt: "Alimento",
    title: "Alimento",
    text: "Comida humeda para perros",
    bgcolor: "#9bcefa",
  },
  {
    id: 9,
    img: "/images/buzo.jpg",
    alt: "Ropa",
    title: "Ropa para perros",
    text: "Buzos",
    bgcolor: "#9bcefa",
  },
  {
    id: 10,
    img: "/images/chaleco.jpg",
    alt: "Ropa",
    title: "Ropa para perros",
    text: "Chaleco",
    bgcolor: "#9bcefa",
  },
  {
    id: 11,
    img: "/images/lazo.jpg",
    alt: "Ropa",
    title: "Ropa para perros",
    text: "Lazo",
    bgcolor: "#9bcefa",
  },
  {
    id: 12,
    img: "/images/impermeable.jpg",
    alt: "Ropa",
    title: "Ropa para perros",
    text: "Impermeable",
    bgcolor: "#9bcefa",
  },
  {
    id: 13,
    img: "/images/cepillo.jpg",
    alt: "Accesorios",
    title: "Accesorios",
    text: "Cepillo",
    bgcolor: "#9bcefa",
  },
  {
    id: 14,
    img: "/images/collar.jpg",
    alt: "Accesorios",
    title: "Accesorios",
    text: "Collar",
    bgcolor: "#9bcefa",
  },
  {
    id: 15,
    img: "/images/correa.jpg",
    alt: "Accesorios",
    title: "Accesorios",
    text: "Correa",
    bgcolor: "#9bcefa",
  },
  {
    id: 16,
    img: "/images/chapa.jpg",
    alt: "Accesorios",
    title: "Accesorios",
    text: "Chapa",
    bgcolor: "#9bcefa",
  },
]

const CardsList = () => {

  return (
    <>
      <div>
        {
          productos.map((producto) =>
          (<Card key={producto.id} producto={producto} />
          ))}
      </div>

      <style jsx> {`
       div {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
       } 
        `
      }
      </style>
    </>
  )
}

export default CardsList
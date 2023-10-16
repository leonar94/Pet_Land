const Button = ({bgcolor}) => {
    return (
      <>
        <button>Comprar</button>
  
        <style jsx>{`
          button {
            background-color: ${bgcolor};
            color: white;
            border: none;
            border-radius: .3rem;
            padding: 5px 10px;
            text-transform: uppercase;
            box-shadow: 0px 2px 2px -1px black;
            transition: .3s;
            width: 95%;
            margin-left: 5px
          }
          button:hover {
            box-shadow: 0px 2px 2px 0px black;
          }
        `  
          }</style>
  
      </>
    )
  }
  
  export default Button
  
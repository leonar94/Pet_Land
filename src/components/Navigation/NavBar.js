



const NavBar = () => {
  return (
    <>
    <nav>Hola</nav>

    <style jsx>{`
          nav {
            background-color: red;
          }
            
            @media screen and (min-width: 480px) {
              nav{background-color: blue;}  
            }
        `  
          }</style>

    </>
  )
}

export default NavBar
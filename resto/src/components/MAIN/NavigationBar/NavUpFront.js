import React, {useState,Fragment} from 'react'
import Nav from './Nav'
function NavUpFront() {
    const [cart, setCart] = useState([])  
 



  return (
    <Fragment>
    <Nav cart={cart} setCart={setCart}/>
   
    </Fragment>

  )
}

export default NavUpFront;
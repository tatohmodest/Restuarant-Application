import React, { useEffect, useState} from 'react';
import style from './Nav.module.css';
import { TiShoppingCart } from "react-icons/ti";
import Cart from '../../CART/Cart';


function Nav({cart, setCart}) {
    const [modal, setModal] = useState(false)

    useEffect(()=>{
       console.log(cart.length) 
    },[cart])
    
  return (
          
            <header className={style.header}>
        <div className={style.logo}>
            <h1>TasteBuns</h1>
            </div>
            <input type='search' id='search' placeholder='Search Food' />
            <span class="material-symbols-outlined"  >
search
</span>
            <nav>
                <ul>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>About</li></a>
                    <a href='#'><li>Order</li></a>
                </ul>
                <div className={style.Cart}>
                    <button onClick={()=>{setModal(!modal)}}>
                        <div className={style.cartIcon}>
                        <strong>Show Cart</strong> <TiShoppingCart/> 
                        </div>

                        <div className={style.countcart}>
                         {cart.length}
                        </div>
                           
                    </button>  
                    {modal && <Cart 
                    modal={modal} 
                    setModal={setModal}
                    setCart={setCart}
                    cart={cart} />}

                       </div>
            </nav>
        
     </header>

        )}

   


  

export default Nav;
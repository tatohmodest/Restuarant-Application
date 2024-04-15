import React, { Fragment, useEffect} from 'react'
import ReactDOM from 'react-dom'
import style from './Cart.module.css';


function Cart({modal, setCart, cart, setModal}) {
  
 
 const Delete = (i) => {
  const update = cart.filter(item=>  item.id!== i)
   setCart(update)
 }
  useEffect(()=>{
  try{
    const CartList = localStorage.getItem('MyCart')
    const Cart = JSON.parse(CartList)
     setCart( Cart|| [])
    
  }catch (error){
    console.error("Error Parsing Data", error)
  }
},[])
    const modalRoot = document.getElementById('Cart')
    const modalContent =   (
    
    <Fragment >
        <div onClick={()=> setModal(!modal)} className={style.CartCover}>
        <div className={style.Cart} onClick={(e)=>e.stopPropagation()}>
            <div className={style.Food}>
              <ul>
              {cart.map((item)=> {

                return(
                <li key={item.id}>

            <div className={style.newItem}>
              <div className={style.it}>
              <div className={style.img}><img src={item.img} width="60px" height="30px" alt='No Image Found'></img></div>
             <div>{item.name}</div>
              </div>
            
            <div>{item.amount}X</div>
            <div>${item.price}</div>
            <button className={style.deleteit} onClick={()=>Delete(item.id)}>
              Delete
            </button>
            </div>
                </li>
              )})} 
         </ul>
            </div>
            <div className={style.button}>
            <button className={style.cancle} onClick={()=>setModal(!modal)}>Cancel</button>
            <button className={style.buy}>Buy</button>
            </div>
            
            </div>
        </div>

  
    </Fragment>
 
  )
  return(
    
    <Fragment>
    
       
        {ReactDOM.createPortal(modalContent,modalRoot )}
    </Fragment>
   
  )
}

export default (Cart);
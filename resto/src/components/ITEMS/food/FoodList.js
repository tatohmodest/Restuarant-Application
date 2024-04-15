import React, { useEffect, useReducer, useState } from 'react'
import { CiStar } from "react-icons/ci";
import style from './Items.module.css';
import {v4 as uuidv4} from 'uuid'
import Cart from '../../CART/Cart';



const initialCart = [

]

const Reducer = (state, action) => {
 switch (action.type) {
    case 'ITEMS':
        return[
           ...state, 
           action.payload
        ]

    default:
    return state
 }
}

function FoodList() {
//this stores the item to send to the local storage.
const [Cart, dispatch] = useReducer(Reducer, initialCart)

// this holds the elements in the cart after it has been added
const [aFood, setAFood] = useState([])

// changing the amount variable in the food form
//manipulating the amount
const ChangeAmount =(id, Amount)=>{
       setAFood(currentFood => {
        //changing the current amount of the specific item
        //return the previous state
        return currentFood.map((item)=>{
            if (item.id === id){
                return {...item, amount:Amount}//return the change amount for the item 
            }
            return item //returning the item changed or unchanged
        })
       })
       }

//the food list
const Items =[ {
    name:'Burger',
    img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph",
    imgwidht:200,
    imgheight:120,
    price:3.4,
    rate:4.2,
    id:uuidv4(),
    amount:1
}
,
{
    name:'Corn-Fufu and Vegetables',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1m9Tu-JgJaUQ5BmTYOIxKOzQEOOl2ssA7f2RC1N62f9fRN5uVOXpj9tybnvadPJm22A&usqp=CAU",
    imgwidht:200,
    imgheight:120,
    price:5.1,
    rate:4.9,
    id:uuidv4(),
    amount:1
}
,
{
    name:'Water-Fufu and Eru',
    img:"https://toplist.info/images/800px/eru-popular-food-of-cameroon-793895.jpg",
    imgwidht:200,
    imgheight:120,
    price:5.6,
    rate:5.0,
    id:uuidv4(),
    amount:1

}
,
{
    name:'Mexican Rice',
    img:"https://pinchandswirl.com/wp-content/uploads/2022/01/Rice-Cooker-Mexican-Rice-sq.jpg",
    imgwidht:200,
    imgheight:120,
    price:8.4,
    rate:4.7,
    id:uuidv4(),
    amount:1
}
,
{
    name:'Irish Beef Stew',
    img:"https://hips.hearstapps.com/hmg-prod/images/irish-beef-stew-horizontal-6400c34556690.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    imgwidht:200,
    imgheight:120,
    price:6.4,
    rate:4.3,
    id:uuidv4(),
    amount:1
}
,
{
    name:'Garlic Beef Stew',
    img:"https://www.lanascooking.com/wp-content/uploads/2022/09/garlicky-beef-stew-1200-feature.jpg",
    imgwidht:200,
    imgheight:120,
    price:3.4,
    rate:4.2,
    id:uuidv4(),
    amount:1
}
,
{
    name:'Burger',
    img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph",
    imgwidht:200,
    imgheight:120,
    price:3.4,
    rate:3.2,
    id:uuidv4(),
    amount:1
}
,
{
    name:'Burger',
    img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph",
    imgwidht:200,
    imgheight:120,
    price:3.4,
    rate:4.2,
    id:uuidv4(),
    amount:1
}
,
{
    name:'Burger',
    img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph",
    imgwidht:200,
    imgheight:120,
    price:3.4,
    rate:4.2,
    id:uuidv4(),
    amount:1
}


]
//handles the  form submit
const HandlSubmit = (e) => {
    e.preventDefault()

    //sending the Cart to be stored in the local storage 
    const CartList = JSON.stringify(Cart)
   localStorage.setItem('MyCart', CartList)

     //resetting the current value of all amounts 
    setAFood( (prevState => {
        return prevState.map((item)=> {
            return {...item, amount:1}
        }
    )
    }))

}



//setting the whole item to the local storage
const FoodListing = JSON.stringify(Items)
localStorage.setItem('Foodstuffs', FoodListing)

//retrieving data using the useEffect
useEffect(()=>{
   //retrieving the saved food
   console.log(Cart)
    try{
        const FoodListing = localStorage.getItem('Foodstuffs');
        const Items = JSON.parse(FoodListing);
        setAFood(Items || [])
    }catch (error){
        console.error("Error Parsing Data", error)
    }
   
    
},[Cart])
    

return (
 <React.Fragment>
  <ul>

   <div className={style.alignitems}>
  
   <div className={style.items}>
        <h1>Menu</h1>
        <div className={style.active}>
   <h2>Hello,</h2>
        <p>This is our food menu, you can find food of all kind, feel free to make your choice(s)<br/>
        come Lets bring you to a tasty treat.</p>
   </div>
    {aFood.map((item) => {
       
        return(
            <li key={item.id}>
            <form onSubmit={HandlSubmit}>
          
        <div className={style.product}>
           
            <div className={style.item}>
                <div className={style.pic}>
                <img src={item.img} alt='No Image' width={`${item.imgwidht}px`} height={`${item.imgheight}px`} />
                <div className={style.format}>
                    <h4 >{item.name}</h4>
                    <div className={style.rate}>
                    <p >{item.rate}/5</p>
                    <div className={style.stars}>
                    <CiStar className={style.one} />
                    <CiStar className={style.one} />
                    <CiStar className={style.one} />
                    <CiStar className={style.one} />
                    <CiStar className={style.one} />
                    </div>

</div>
                    <p className={style.price}>${item.price}</p>
                    </div>

                    <div className={style.cta}>

                    <label htmlFor='amount'>Amount</label>
                    <input type="number"
                     id={item.id} 
                     className={style.amount}
                     min="1"
                     max = "5"
                     defaultValue="1"
                     value={item.amount}
                     step="1"
                     onChange={(e)=> ChangeAmount(item.id, e.target.value)}/>
                    
                    <div className={style.buy}>
                    <button type='submit'>Buy</button>
                    <button type='submit' onClick={()=> dispatch({type:'ITEMS', payload:item})} >Add To Cart </button>
                    </div>
                    </div>
                </div>
            </div>
</div>
       
 
       </form></li>
    )
    })}
    </div>
    </div>
   </ul>
   </React.Fragment>
 ) 
}
export default FoodList
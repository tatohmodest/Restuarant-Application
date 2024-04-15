import React from 'react'
import Hero from './Sections/HeroSection/Hero';
import Items from '../ITEMS/Items';
import NavUpFront from './NavigationBar/NavUpFront';

function MainPage() {
  return (

<React.Fragment className='Page'>
  
  <NavUpFront />
    <Hero />
    <Items />
</React.Fragment>
  )
}

export default MainPage;
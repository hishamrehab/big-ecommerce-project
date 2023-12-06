import React from 'react'
import NavBarLogin from '../../Components/utility/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'

const HomePage = () => {
  return (
    <div>
        <NavBarLogin />
        <Slider />
        <div className='container'>
         <HomeCategory />
 
        </div> 
  
    </div>
  )
}

export default HomePage
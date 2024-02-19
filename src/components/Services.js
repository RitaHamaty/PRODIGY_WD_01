import React from 'react'
import { IoFlowerOutline } from "react-icons/io5";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { RiHome3Line } from "react-icons/ri";

const Services = () => {
  return (
    <div className='mx-5 px-5 '>
      <p className='offer'>What we offer:</p>
      <div className='my-4 d-flex justify-content-center'>
        <RiHome3Line className='icon'/>         
        <span className='ser'>Venue</span>
      </div>
      <div className='my-4 d-flex justify-content-center'>
        <IoFlowerOutline className='icon'/>        
        <span className='ser'>Flowers</span>
      </div >
      <div className='my-4 d-flex justify-content-center'>
        <IoRestaurantOutline className='icon'/> 
        <span className='ser'>Food</span>
      </div>
      <div className='my-4 d-flex justify-content-center'>
        <FaGlassMartiniAlt className='icon'/>
        <span className='ser'>Beverages</span>
      </div>
      <div className='my-4 d-flex justify-content-center'>
        <IoMusicalNotesOutline className='icon'/> 
        <span className='ser'>Music</span>
      </div> 
    </div>
  )
}

export default Services
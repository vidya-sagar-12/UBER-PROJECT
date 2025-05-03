import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-home-9-line"></i>
      </Link>
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt=''/>
      </div>

      <div className='h-1/2 p-4'>
      <div className='flex items-center justify-between'>
      <img className='h-20' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'/>
      <div className='text-right'>
        <h2 className='text-lg font-medium'>Sarthak</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>KA 12 AB 1234</h4>
        <p className='text-sm text-gray-600'>Toyota Supra</p>
      </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
        <i className="ri-map-pin-user-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>562/11 A</h3>
                <p className='text-sm -mt-1 text-gray-600 '>S B Lake, Kalaburagi</p>
            </div>
        </div>
        <div className='flex items-center gap-5 p-3 '>
            <i className="ri-money-rupee-circle-line"></i>
            <div>
                <h3 className='text-lg font-medium'>193.20</h3>
                <p className='text-sm -mt-1 text-gray-600 '>Cash/Pay on End of Trip</p>
            </div>
        </div>
      </div>
      </div>
        <button className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
      </div>
    </div>
  )
}

export default Riding

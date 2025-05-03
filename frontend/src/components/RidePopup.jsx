import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
      <h5 onClick={()=>{props.setRidePopupPanel(false)}} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>A Ride for you</h3>

      <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg mt-4'>
        <div className='flex items-center gap-3 '>
        <img className='h-10 w-10 rounded-full object-cover' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww' alt=''/>
        <h2 className='text-lg font-medium'>Harshi Pateliya</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 Km</h5>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-300'>
            <i className="text-lg ri-map-pin-2-line"></i>
            <div>
                <h3 className='text-lg font-medium'>562/11 A</h3>
                <p className='text-sm -mt-1 text-gray-600 '>S B Lake, Kalaburagi</p>
            </div>
        </div>
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
        
        <button onClick={()=>{
            props.setConfirmRidePopupPanel(true)
        }} className='mt-3 w-full bg-green-500 text-white font-semibold p-2 px-10 rounded-lg'>Accept</button>
        
        <button onClick={()=>{
            props.setRidePopupPanel(false)
        }} className='mt-1 w-full bg-gray-300 text-black font-semibold p-2 px-10 rounded-lg'>Ignore</button>
        
      </div>
    </div>
  )
}

export default RidePopup

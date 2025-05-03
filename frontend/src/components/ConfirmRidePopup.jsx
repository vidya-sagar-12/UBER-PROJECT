import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopup = (props) => {

    const [otp, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <h5 onClick={()=>{props.setRidePopupPanel(false)}} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>

      <div className='flex items-center justify-between p-3 border-2 border-yellow-300 rounded-lg mt-4'>
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
        <div className='mt-6 w-full'>
            <form onSubmit={(e)=>{submitHandler(e)}}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)}  type='text' placeholder='Enter OTP' className='bg-[#eee] font-mono px-6 py-4 text-base rounded-lg w-full mt-5' required/>

            <Link to='/captain-riding' className='w-full text-lg flex justify-center mt-5 bg-green-500 text-white font-semibold p-3 rounded-lg'>Got to Pickup</Link>

            <button onClick={()=>{
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
            }} className='w-full mt-2 bg-red-500 text-lg text-white-700 font-semibold p-3 rounded-lg'>Cancel</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ConfirmRidePopup

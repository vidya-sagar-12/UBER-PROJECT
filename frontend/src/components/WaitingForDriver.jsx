import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={()=>{props.WaitingForDriver(false)}} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>

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
      </div>
    </div>
  )
}

export default WaitingForDriver

import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={()=>{props.setVehiclePanel(false)}} className='p-1 text-center w-[93%] absolute top-0'><i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{props.setConfirmedRidePanel(true)}} className='flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className=' h-12' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png'/>
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo<span className='text-sm pl-2'><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-xs'>2 mins away</h5>
            <p className='font-normal text-xs'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$100</h2>
        </div>

        <div onClick={()=>{props.setConfirmedRidePanel(true)}} className='flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className=' h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png'/>
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto<span className='text-sm pl-2'><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-xs'>3 mins away</h5>
            <p className='font-normal text-xs'>Affordable, Motorcycle ride</p>
          </div>
          <h2 className='text-lg font-semibold'>$45</h2>
        </div>

        <div onClick={()=>{props.setConfirmedRidePanel(true)}} className='flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className=' h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'/>
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto<span className='text-sm pl-2'><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-xs'>4 mins away</h5>
            <p className='font-normal text-xs'>Affordable, Auto ride</p>
          </div>
          <h2 className='text-lg font-semibold'>$76</h2>
        </div>
        
    </div>
  )
}

export default VehiclePanel

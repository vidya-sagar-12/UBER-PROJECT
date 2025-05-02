import React from 'react'

const LocationSearchPanel = (props) => {


  const loactions = [
    "24B, Near Kapoor's cafe, Sheriyans Coding School, Bhopal",
    "22C, Near Malhotra's cafe, Sheriyans Coding School, Bhopal",
    "20B, Near Khan's cafe, Sheriyans Coding School, Bhopal",
    "18A, Near Sighania's cafe, Sheriyans Coding School, Bhopal",
  ]
  return (
    <div>
      {
        loactions.map(function(elem, idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
            }} 
            className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full '><i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel

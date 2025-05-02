import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

      const navigate = useNavigate()


      const [email, setEmail]= useState('')
      const [password, setPassword]= useState('')
      const [firstname, setFirstname]= useState('')
      const [lastname, setLastname]= useState('')
      const [userData, setUserData]= useState({})

      const [vehicleColor, setVehicleColor] = useState('');
      const [vehiclePlate, setVehiclePlate] = useState('');
      const [vehicleCapacity, setVehicleCapacity] = useState('');
      const [vehicleType, setVehicleType] = useState('');

      const { captain, setCaptain } = React.useContext(CaptainDataContext)
  
    const submitHandler = async (e) => {
      e.preventDefault()
      const captainData = {
        fullname:{
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
        }
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if(response.status === 201) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }

      setEmail('')
      setPassword('')
      setFirstname('')
      setLastname('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-5' src='https://pngimg.com/d/uber_PNG24.png' alt='' />
    <form onSubmit={(e) => submitHandler(e)}>
      <h3 className='text-base font-medium mb-2'>What's your name</h3>
      <div className='flex gap-3 mb-5'>
      <input 
      required
      value={firstname}
      onChange={(e) => setFirstname(e.target.value)}
      className='bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-base placeholder:text-sm' 
      type='text' 
      placeholder='Firstname' 
      />

      <input 
      required
      value={lastname}  
      onChange={(e) => setLastname(e.target.value)}
      className='bg-[#eeeeee]  rounded px-4 py-2  w-1/2 text-base placeholder:text-sm' 
      type='text' 
      placeholder='Lastname' 
      />
      </div>
      <h3 className='text-base font-medium mb-2'>What's your email</h3>
      <input 
      required
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm' 
      type='email' 
      placeholder='email@example.com' 
      />

      <h3 className='text-base font-medium mb-2'>Enter Password</h3>
      <input 
      required 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-base placeholder:text-sm'
      type='password' 
      placeholder='password' 
      />

      <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
      <div className='flex gap-3 mb-5'>
        <input
          required
          value={vehiclePlate}
          onChange={(e) => setVehiclePlate(e.target.value)}
          className='bg-[#eeeeee] mb-3 rounded px-4 py-2 w-1/2 text-base placeholder:text-sm'
          type='text'
          placeholder='Vehicle Plate Number'
        />
        <input
          required
          value={vehicleColor}
          onChange={(e) => setVehicleColor(e.target.value)}
          className='bg-[#eeeeee] mb-3 rounded px-4 py-2 w-1/2 text-base placeholder:text-sm'
          type='text'
          placeholder='Vehicle Color'
        />
      </div>

        <div className='flex gap-3 mb-5'>
        <input
          required
          value={vehicleCapacity}
          onChange={(e) => setVehicleCapacity(e.target.value)}
          className='bg-[#eeeeee] mb-3 rounded px-4 py-2 w-1/2 text-base placeholder:text-sm'
          type='number'
          min='1'
          placeholder='Vehicle Capacity'
        />
        <select
          required
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className='bg-[#eeeeee] rounded-lg px-4 py-2 w-1/2 text-base placeholder:text-base'
        >
          <option value='' disabled>Select Vehicle Type</option>
          <option value='car'>Car</option>
          <option value='auto'>Auto</option>
          <option value='moto'>Moto</option>
        </select>
      </div>

      <button className='bg-[#111] text-white font-semibold mb-3 mt-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Register</button>
      <p className='text-center mb-7'>Already Registered?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
    </form>
    </div>
    <div>
      <p className='text-[11px] leading-tight mb-7'>This site is protected by recapture and the <span className='underline'>Google privacy policy</span> and <span className='underline'>Terms of service apply</span></p>
    </div>
  </div>
  )
}

export default CaptainSignup

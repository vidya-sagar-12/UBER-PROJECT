import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
   const [email, setEmail]= useState('')
      const [password, setPassword]= useState('')
      const [firstname, setFirstname]= useState('')
      const [lastname, setLastname]= useState('')
      const [userData, setUserData]= useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      setUserData({
        fullName:{
          firstname: firstname,
          lastname: lastname
        },
        email: email,
        password: password
      })
      setEmail('')
      setPassword('')
      setFirstname('')
      setLastname('')
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

      <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Register</button>
      <p className='text-center'>Already Registered?<Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
    </form>
    </div>
    <div>
      <p className='text-[11px] leading-tight'>This site is protected by recapture and the <span className='underline'>Google privacy policy</span> and <span className='underline'>Terms of service apply</span></p>
    </div>
  </div>
  )
}

export default CaptainSignup

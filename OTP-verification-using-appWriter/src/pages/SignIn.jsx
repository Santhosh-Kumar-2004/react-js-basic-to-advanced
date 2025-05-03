import React from 'react'
import { useState, useEffect } from 'react';
import { account } from '../lib/appwriteConfig';
import { ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [phoneNumber, setPhoneNumber] = useState("")
  const navigate = useNavigate()

  // useEffect(() => {
  //     const getUser = async () => {
  //       const user = await account.get()
  //       console.log(user)
  //       navigate('/')
  //     }
  //     getUser()
  //   }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(phoneNumber)

    try {
      const token = await account.createPhoneToken(
        ID.unique(),
        phoneNumber
      )
      console.log(token)
      navigate(`/verify?userId=${token.userId}`)

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value)
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Enter You Phone Number</h2>
        <input 
          type="tel" 
          placeholder='+91 9606887205'
          defaultValue={phoneNumber}
          onBlur={handleChange}
          // onBlur={(e) => setPhoneNumber(e.target.value)}
        />
        <button type='Send Verification Code'>Send Code</button>
      </form>
    </>
  )
}

export default SignIn;

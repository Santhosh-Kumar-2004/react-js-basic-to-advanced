import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { account } from '../lib/appwriteConfig'

const Verify = () => {

  const [verificationCode, setVerificationCode] = useState("")
  const [searchParams] = useSearchParams()
  const userId = searchParams.get("userId")
  const navigate = useNavigate()

  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = await account.get()
  //     console.log(user)
  //     navigate('/')
  //   }
  //   getUser()
  // }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(verificationCode)

    try {
      const session = await account.createSession(
        userId,
        verificationCode
      )
      console.log(session)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setVerificationCode(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Enter the Verification Code</h2>
        <input
          type="text"
          placeholder='Verification Code'
          defaultValue={verificationCode}
          onBlur={handleChange}
        />
        <button type='Enter Verification Code'>Verify</button>
      </form>
    </div>
  )
}

export default Verify;

import React from 'react'
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <div className='flex items-center'>
            <ul className='flex justify-between items-center bg-amber-700 w-full gap-7 p-6'>
                <div className='logo font-bold size-6'>Logo</div> 
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy</li>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            </ul>
        </div>
    )
}

export default Navbar;

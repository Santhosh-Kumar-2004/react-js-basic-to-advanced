import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Verify from '../pages/Verify'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/verify',
        element: <Verify />
    }
])

const Routes = () => {
    return <RouterProvider router={router} />;
}

export default Routes
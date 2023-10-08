import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import AuthProvider from './Provider/AuthProvider';
import News from './components/News/News';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>
        // loader : () => fetch('data.json')
       
      },
      {
        path: '/news',
        element: <News></News>

      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

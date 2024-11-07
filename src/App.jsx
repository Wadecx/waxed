import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Bots from './Pages/Ttvbots/Bots'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ttvbots",
    element: <Bots/>
  },
]);

function App() {


  return <RouterProvider router={router} />;  

}

export default App

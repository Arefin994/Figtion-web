import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Figure from './components/Figure/Figure';
import NavAllToys from './components/NavAllToys/NavAllToys';
import SignUP from './components/SignUP/SignUP';
import MyToys from './components/MyToys/MyToys';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      },
      {
        path: '/figure',
        element: <Figure></Figure>
      },
      {
        path: '/allToys',
        element: <NavAllToys></NavAllToys>
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

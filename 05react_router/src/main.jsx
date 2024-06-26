import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

function main(){

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />} > 
            {/* for fixed heade and footer */}
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='user/:userid' element={<User />} />
                <Route path='/github' element={<Github/>} />
            </Route>
        )
    )
    return (
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
      )
    )
}

export default main


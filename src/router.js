import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Screens/Home/Home'
import Template from './components/Template/Template/Template'
import Cart from './components/Screens/Cart/Cart'
import Details from './components/Screens/Details/Details'

function Router() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Template><Home/></Template>} />
            <Route path="/cart" element={<Template><Cart/></Template>} />
            <Route
            path="/details/:id"
            element={
              <Template>
                <Details />
              </Template>
            }
          />
        </Routes>
    </div>
  )
}

export default Router
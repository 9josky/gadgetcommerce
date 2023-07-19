import React, { useState } from 'react'
import storeProducts from './components/Data/Data'



const GlobalContext = React.createContext() 

 const Provider = ({children})=> {
  const [show, setShow ] = useState(null)
  const [preview, setPreview] = useState({})
  const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])
  const Products = [...storeProducts]

  const Helper = (productId) => {
    console.log(productId, 'product')
    const gadgetPreview = Products.find((info) => info.id === productId);
    if (gadgetPreview) {
        setPreview(gadgetPreview)
    }
   
    // setCartItems([...cartItems,gadgetPreview])

    const items = [...cartItems,gadgetPreview]
    localStorage.setItem("cartItems", JSON.stringify(items))
}

const increament = (productId) => {
    const exist = cartItems.find((item) => item.id === productId)
    if (exist) {
        exist.count = exist.count + 1
        exist.total = exist.total + exist.price
        console.log(exist.count, "qty");
    }
}

const decreament = (productId) => {
    const exist = cartItems.find((item) => item.id === productId)
    if (exist) {
        exist.count = exist.count - 1
        exist.total = exist.total - exist.price
        console.log(exist.count, "qty");
    }

    if (exist.count < 1) {
        setCartItems(cartItems.filter((item) => item.id !== productId))
    }
}

const remove = (productId) => {
    const exist = cartItems.find((item) => item.id === productId)
    if (exist) {
        setCartItems(cartItems.filter((item) => item.id !== productId))
    }
}

const CloseModal = () => {
    setShow(false)
    
    setPreview({})

    // forceUpdate()
}

const forceUpdate = () => {
    setCartItems(prev => {
        return [...prev]
    })
}


 const state = {
    show,setShow, Products, Helper, preview, setPreview, CloseModal, cartItems, setCartItems, increament, decreament, forceUpdate, remove
 }
    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, Provider}
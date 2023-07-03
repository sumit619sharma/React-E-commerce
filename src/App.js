import React, { useState ,useContext} from 'react'
import { Button, Container } from 'react-bootstrap'
import Product from './Component/Product'
import NavBar from './Component/NavBar'
import Cart from './Component/Cart'
import AppProvider from './store/CartProvider'
import {BrowserRouter,Route,Routes , useNavigate } from 'react-router-dom'

import About from './Component/About'
import Home from './Component/Home'
import ContactUs from './Component/contactUs'
import ProductDetail from './Component/productDetail'
import Login from './Component/Login'
import AuthContext from './store/auth-context'

const App = () => {
const [showCart,setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);
 // const navigate = useNavigate();
 
  const toggleCart= ()=>{
   setShowCart(!showCart);
  }
  return (
    <AppProvider>
 
      <BrowserRouter>
      <NavBar onClick={toggleCart} />
    {showCart && <Cart onClick={toggleCart}  /> }   

<Routes>
 
 <Route  exact path='/product' element={<Product/>  }    />
 <Route  path='/about' element= { <About/> } />
 <Route  path='/home' element={<Home/>}    />
 <Route  path='/contact' element={<ContactUs/>}    />
 <Route  exact path='/product/:productid' element={ <ProductDetail/> }    />
 <Route  path='/login' element={<Login/>}    />
 <Route path='*' element={<Home/>} />
</Routes>


    </BrowserRouter>
      
 
    </AppProvider>
  )
}

export default App

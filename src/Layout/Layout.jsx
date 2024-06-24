import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Main'
import Home from '../Pages/Home/Home'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import BlogDetail from '../Pages/BlogDetail/BlogDetail'
import Blog from '../Pages/Blog/Blog'
import Wishlist from '../Pages/Wishlist/Wishlist'
import SignIn from '../Pages/SignIn/SignIn'
import Faq from '../Pages/Faq/Faq'
import Shop from '../Pages/Shop/Shop'
import Product from '../Pages/Product/Product'

const Layout = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Main/>,
            children: [
                {
                    path:"/",
                    element: <Home/>
                },
                {
                    path:"/blog",
                    element: <Blog/>,

                },
                {
                    path:"/contact",
                    element: <ContactUs/>
                },
                {
                    path:"/cart",
                    element: <Cart/>
                },
                {
                    path:"/checkout",
                    element: <Checkout/>
                },
                {
                    path: "/blog/:id",
                    element: <BlogDetail/>
                },
                {
                    path: "/Wishlist",
                    element: <Wishlist/>
                },
                {
                    path: "/sign-in",
                    element: <SignIn/>
                },
                {
                    path: "/faq",
                    element: <Faq/>
                },
                {
                    path: "/:id",
                    element: <Shop/>
                },
                {
                    path: "/:id/:id",
                    element: <Shop/>
                },
                {
                    path: "/product",
                    element: <Product/>
                }
            ]
        },
        
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Layout

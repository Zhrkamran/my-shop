
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Articles from '../pages/articles/Articles'
import Produts from '../pages/products/Produts'
import Product from '../pages/product/Product'

export const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/articles",
        element:<Articles/>
    },
    {
        path:"/products",
        element:<Produts/>
    },
    {
        path:"/product/:id",
        element:<Product/>
    },

]
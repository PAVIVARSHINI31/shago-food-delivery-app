import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/contact";
import Cart from "./components/Cart";
import Home from "./components/home";

import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

let Applayout=()=>{
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )

}
let route=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/Home",
                element:<Home/>
            },
            {
                path:"/Body",
                element:<Body/>
            },
             {
                path:"/About",
                element:<About/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            },
             

            {
                path:"/res/:id",
                element:<Menu/>
            }
           
            
        ],
        errorElement:<Error/>

    }
])

function App(){
    return <div>
        <RouterProvider router={route}></RouterProvider>
        </div>
}
export default App;
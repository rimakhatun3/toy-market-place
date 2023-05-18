import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
            ,
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addtoy',
                element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
            }
        ]
        
    }
])

export default router;
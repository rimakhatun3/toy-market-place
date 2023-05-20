import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

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
            },
            {
                path:'alltoys',
                element:<AllToys></AllToys>,
                loader:()=>fetch('http://localhost:5000/alltoys')
            },
            {
                path:'/singletoy/:id',
                element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/alltoy/${params.id}`)

            },
            {
                path:'/mytoys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<UpdateToy></UpdateToy>,
                loader:({params})=>fetch(`http://localhost:5000/alltoy/${params.id}`)
            }

        ]
        
    }
])

export default router;
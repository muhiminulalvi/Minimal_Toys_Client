import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AllToy from "../Pages/AllToy/AllToy";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToy from "../Pages/MyToy/MyToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'alltoy',
            element: <AllToy />,
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'register',
            element: <Register />
        },
        {
            path: 'blog',
            element: <Blog />
        },
        {
            path: 'addtoy',
            element: <PrivateRoute><AddToy /></PrivateRoute>
        },
        {
            path: 'toys/:id',
            element: <PrivateRoute><ToyDetails /></PrivateRoute>,
            loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-muhiminulalvi.vercel.app/toys/${params.id}`)
        },
        {
            path: 'mytoys',
            element: <PrivateRoute><MyToy /></PrivateRoute>
        }
      ]
    },
  ]);


  export default router
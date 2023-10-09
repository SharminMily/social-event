import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Page/Home/Home.jsx';
import Service from './Page/Servise/Service.jsx';
import ErrorPage from './Page/ErrorPage/ErrorPage';
import Events from './components/Event/Events';
import ServiceDetails from './Page/Servise/ServiceDetails';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('./data.json')
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/serviceDetails",
        element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
      },
      {
        path: "/events",
        element: <Events></Events>,
        //  loader: () => fetch('./data.json')       
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <PrivateRouter><Blog></Blog></PrivateRouter>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <RouterProvider router={router} />
    
    </AuthProvider>    

  </React.StrictMode>,
)

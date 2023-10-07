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
        path: "/events",
        element: <Events></Events>, 
        //  loader: () => fetch('./data.json')       
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

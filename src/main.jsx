import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import Root from "./LayOuts/Root.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import Login from "./components/LogIn/Login.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index:true, Component:Home},
      {path: 'login', Component:Login}
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     <RouterProvider router={router} />
  </StrictMode>,
)

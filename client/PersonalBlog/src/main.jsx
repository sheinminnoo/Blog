import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import BlogDetailPage from './Pages/BlogDetailPage.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import BlogForm from './Pages/BlogForm.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : '/',
        element : <Home/>

      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/blogs/blogform',
        element : <BlogForm/>
      },

      {
        path : "/blogs/:id",
        element : <BlogDetailPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

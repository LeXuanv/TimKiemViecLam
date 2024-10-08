import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router =  createBrowserRouter(
    createRoutesFromElements(
        <Route path="/home" />
    )
)

const Layout = () => {
    return <RouterProvider router={router} />
}

export default Layout;
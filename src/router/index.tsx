import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home"
import Login from "../pages/login";
import OauthConfig from "../pages/oauthConfig";

const routes = [
    {
        path:'/',
        Component:Main,
        children:[
            {
                path:"/",
                element:<Navigate to = "home"/>
            },
            {
                path:'home',
                Component:Home
            },
            {
                path:'oauthConfig',
                Component:OauthConfig
            },
        ]
    },
    {
        path: "/login",
        Component: Login,
    }
]

export default createBrowserRouter(routes)
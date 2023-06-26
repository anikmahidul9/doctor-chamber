import Main from "../Layout/Main";
import Login from "../pages/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/Home");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
                    {
                        path: '/',
                        element: <Home/>,
                    },
                    {
                        path:'/login',
                        element: <Login/>,
                    }
                ]
}
])
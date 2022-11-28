import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import MakeOrder from "../../pages/Home/MakeOrder/MakeOrder";
import Login from "../../pages/Login/Login";
import Logout from "../../pages/Logout/Logout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/makeorder',
                element: <MakeOrder></MakeOrder>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/logout',
                element: <Logout></Logout>
            }

        ]
    }
]);
export default router;
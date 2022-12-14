import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import MyReviews from "../components/MyReviews/MyReviews";
import ReviewEdit from "../components/MyReviews/ReviewEdit";
import ConfirmAddService from "../components/MyServices/ConfirmAddService";
import MyServices from "../components/MyServices/MyServices";
import Reviews from "../components/Reviews/Reviews";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Services from "../components/Services/Services";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Main from "../Layouts/Main";
import PrivateRoute from "./PrivateRoute";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/services',
                element: <Services></Services>,

            },
            {
                path: 'details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/details/${params.id}`)
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/reviews/:id',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/details/${params.id}`)
            },
            {
                path: '/addService/:id',
                element: <PrivateRoute><ConfirmAddService></ConfirmAddService></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/details/${params.id}`)
            },
            {
                path: '/myServices',
                element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,

            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/myReview/reviewEdit/:id',
                element: <PrivateRoute><ReviewEdit></ReviewEdit></PrivateRoute>
            }
        ]
    }
])
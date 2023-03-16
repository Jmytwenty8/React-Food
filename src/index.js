import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent';
import FooterComponent from './components/FooterComponent';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';




const AppLayout = () => (
    <>
        <HeaderComponent />
        <Outlet/>
        <FooterComponent/>
    </>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element:<About/>
            },

            {
                path: "/",
                element:<BodyComponent/>
            },

            {
                path: "/contact",
                element:<Contact/>
            },

            {
                path: "/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
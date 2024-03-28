import loadable from '@loadable/component'

import Layout from "@core/components/Layout/Layout";
import Home from "@screens/Home/Home";
import homeLoader from "@loaders/homeLoader";
import About from "@screens/About/About";
import { RouteObject } from 'react-router-dom';

const Contact = loadable(() => import("@screens/Contact/Contact"), { fallback: <div>Loading...</div> });


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
                // loader: homeLoader
            }, {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]

export default routes;
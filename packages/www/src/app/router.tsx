import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import layout from './layout/default';
const router: RouteConfig[] = [
    {
        path: "/",
        component: layout,
        routes: [
            {
                path: "/",
                exact: true,
                component: React.lazy(() => import("pages/test"))
            },
            {
                path: "/page",
                exact: true,
                component: React.lazy(() => import("pages/test2"))
            }
        ]
    }
]
export default renderRoutes(router) 

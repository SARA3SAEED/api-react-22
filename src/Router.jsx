import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Photo from './Photo';
import Photodetails from './Photodetails';



export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Photo />,
    },
    {
      path: "/:id",
      element: <Photodetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}
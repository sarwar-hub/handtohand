import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Calculator from './layout/Calculator';
import From from './pages/From/From';
import Items from './pages/Items/Items';
import Date from './pages/Date/Date';
import PickupTime from './pages/PickupTime/PickupTime';
import DeliveryTime from './pages/DeliveryTime/DeliveryTime';
import PickupFloor from './pages/PickupFloor/PickupFloor';
import DeliveryFloor from './pages/DeliveryFloor/DeliveryFloor';
import ExtraHelp from './pages/ExtraHelp/ExtraHelp';
import ContactDetails from './pages/ContactDetails/ContactDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/calculator',
    element: <Calculator></Calculator>,
    children: [
      {
        path: 'from',
        element: <From></From>
      },
      {
        path: 'items',
        element: <Items></Items>
      },
      {
        path: 'date',
        element: <Date></Date>
      },
      {
        path: 'pickupTime',
        element: <PickupTime></PickupTime>
      },
      {
        path: 'deliveryTime',
        element: <DeliveryTime></DeliveryTime>
      },
      {
        path: 'pickupFloor',
        element: <PickupFloor></PickupFloor>
      },
      {
        path: 'deliveryFloor',
        element: <DeliveryFloor></DeliveryFloor>
      },
      {
        path: 'extraHelp',
        element: <ExtraHelp></ExtraHelp>
      },
      {
        path: 'contactDetails',
        element: <ContactDetails></ContactDetails>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

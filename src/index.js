import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as loaderRoot } from './routes/root';
import ErrorPage from './routes/error-page';
import Event, {loader as loaderEvent } from './routes/event';
import Player, { loader as loaderPlayer } from './routes/player';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loaderRoot
  },
  {
    path: '/events/:eventId',
    element: <Event />,
    errorElement: <ErrorPage />,
    loader: loaderEvent
  },
  {
    path: '/players/:playerId',
    element: <Player />,
    errorElement: <ErrorPage />,
    loader: loaderPlayer
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
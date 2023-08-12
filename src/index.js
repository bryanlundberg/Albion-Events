import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root, { loader as loaderRoot } from './routes/root';
import ErrorPage from './routes/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loaderRoot
  },
  {
    path: '/kills',
    element: <div></div>,
    errorElement: <ErrorPage />
  },
  {
    path: 'players/:playerId',
    element: <div></div>,
    errorElement: <ErrorPage />
  },
  {
    path: 'guild/:guildId',
    element: <div></div>,
    errorElement: <ErrorPage />
  },
  {
    path: 'guild/:guildId/members',
    element: <div></div>,
    errorElement: <ErrorPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
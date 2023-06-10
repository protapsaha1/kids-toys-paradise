import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './route/Router.jsx';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import UserContext from './components/UserContext/UserContext';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserContext>
  </React.StrictMode>,
)

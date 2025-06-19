import { createBrowserRouter } from 'react-router';

import { AppLayout } from '@/layouts/AppLayout';
import { Home } from '@/pages/Home';
import { New } from '@/pages/New';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'new', element: <New /> },
    ],
  },
]);

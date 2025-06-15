import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '@/router';

import { ThemeProvider } from './components/ThemeProvider';

const RootElement: HTMLElement = document.getElementById('root')!;

createRoot(RootElement).render(
  <ThemeProvider>
    <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
);

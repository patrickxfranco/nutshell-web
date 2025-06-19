import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '@/router';

import { ThemeProvider } from '@/components/ThemeProvider';

const RootElement: HTMLElement = document.getElementById('root')!;

createRoot(RootElement).render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
);

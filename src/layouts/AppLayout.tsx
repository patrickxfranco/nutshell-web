import type { ReactElement } from 'react';
import { Outlet } from 'react-router';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function AppLayout(): ReactElement {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="pt-13">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

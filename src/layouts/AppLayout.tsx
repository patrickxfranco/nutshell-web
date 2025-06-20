import { useEffect, type ReactElement } from 'react';
import { Outlet, useLocation } from 'react-router';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function AppLayout(): ReactElement {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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

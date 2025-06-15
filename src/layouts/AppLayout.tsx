import type { ReactElement } from 'react';
import { Outlet } from 'react-router';

export function AppLayout(): ReactElement {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

//REMOVER IMPORTAÇÕES POSTERIOEMENTE
import { Header } from '@/components/Header';

import { type ReactElement } from 'react';
import { MobileView } from '@/pages/Home/MobileView';

export function Home(): ReactElement {
  return (
    <div className="flex flex-col mx-4 pt-4">
      <MobileView />
    </div>
  );
}

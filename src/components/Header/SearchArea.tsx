import { Input } from '@/components/ui/input';

import type { ReactElement } from 'react';

export function SearchArea(): ReactElement {
  return (
    <div className="w-full">
      <Input placeholder="Buscar conteúdos" className="bg-white dark:bg-black sm:w-100" />
    </div>
  );
}

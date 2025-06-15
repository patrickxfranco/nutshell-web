import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { ReactElement } from 'react';

export function LogoArea(): ReactElement {
  return (
    <>
      <Button size="icon" variant="secondary">
        <Plus />
        <span className="sr-only">Adicionar um conteúdo</span>
      </Button>
    </>
  );
}

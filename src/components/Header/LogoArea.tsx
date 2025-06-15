import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LogoArea() {
  return (
    <>
      <Button size="icon" variant="secondary">
        <Plus />
        <span className="sr-only">Adicionar um conteúdo</span>
      </Button>
    </>
  );
}

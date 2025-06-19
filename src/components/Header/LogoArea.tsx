import { Plus, Home } from 'lucide-react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';

import type { ReactElement } from 'react';

export function LogoArea(): ReactElement {
  return (
    <div className="flex flex-row gap-2 *:w-10 *:h-10">
      <Button size="icon" variant="secondary" asChild>
        <Link to="/">
          <Home />
          <span className="sr-only">Ir para home</span>
        </Link>
      </Button>
      <Button size="icon" variant="secondary" asChild>
        <Link to="/new">
          <Plus />
          <span className="sr-only">Adicionar um conteúdo</span>
        </Link>
      </Button>
    </div>
  );
}

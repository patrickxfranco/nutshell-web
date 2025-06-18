import type { ReactElement } from 'react';
import { Badge } from '@/components/ui/badge';

interface CardHeaderProps {
  name: string;
  type: string;
}

export function CardHeader({ name, type }: CardHeaderProps): ReactElement {
  return (
    <header className="flex flex-row justify-between items-center w-full">
      <span className="max-w-[33ch] font-black text-white text-lg truncate uppercase">{name}</span>
      <Badge variant="default" className="bg-white/90 backdrop-blur-sm p-1 rounded-xs size-4 text-black">
        {type === 'M' ? 'F' : 'S' /* VERIFICA O TIPO DO CONTEÚDO E ALTERA A LETRA RENDERIZADA PARA PORTUGUÊS-BRASILEIRO */}
      </Badge>
    </header>
  );
}

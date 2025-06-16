import type { ReactElement } from 'react';

import { Badge } from '@/components/ui/badge';

interface CardProps {
  name: string;
  description?: string;
  coverUrl: string;
  logo?: string;
  type: 'M' | 'S';
}

export function Card({ name, description, coverUrl, logo, type }: CardProps): ReactElement {
  function renderLogoOrName() {
    if (logo) {
      return <img src={logo} alt={`Logo de ${name}`} className="w-34 h-full" />;
    }

    return (
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between items-center w-full">
          <span className="max-w-[33ch] font-black text-white text-lg truncate uppercase">{name}</span>
          <Badge variant="default" className="bg-primary/90 backdrop-blur-sm p-1 rounded-xs size-4">
            {type}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs text-justify line-clamp-2">{description}</p>
      </div>
    );
  }
  return (
    <div className="group sm:hidden relative border rounded-sm w-full h-30 overflow-hidden *:transition-all">
      <img
        src={coverUrl}
        alt={`Imagem de ${name}`}
        className="brightness-30 group-hover:brightness-100 saturate-30 group-hover:saturate-150 w-full h-full object-cover aspect-video group-hover:scale-102"
      />
      <div className="top-0 left-0 absolute group-hover:opacity-0 p-4 group-hover:-translate-x-5">{renderLogoOrName()}</div>
      {/* <Badge
        variant="default"
        className="top-0 right-0 absolute bg-primary/90 group-hover:opacity-0 backdrop-blur-sm m-4 p-1 rounded-xs size-4 group-hover:translate-x-5"
      >
        {type}
      </Badge> */}
    </div>
  );
}

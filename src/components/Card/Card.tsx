import './styles.css';

import { type ReactElement, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, NotepadText, PencilRuler, Minimize } from 'lucide-react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description?: string;
  coverUrl: string;
  logo?: string;
  type: 'M' | 'S'; // M = MOVIE / S = SERIE
}

export function Card({ name, description, coverUrl, logo, type, ...rest }: CardProps): ReactElement {
  const [active, setActive] = useState<boolean>(false);

  function renderLogoOrName() {
    if (logo) {
      return <img src={logo} alt={`Logo de ${name}`} className="w-34 h-full" />;
    }

    return (
      <div className="flex flex-col gap-1">
        <div className="flex flex-row justify-between items-center w-full">
          <span className="max-w-[33ch] font-black text-white text-lg truncate uppercase">{name}</span>
          <Badge variant="default" className="bg-primary/90 backdrop-blur-sm p-1 rounded-xs size-4">
            {type === 'M' ? 'F' : 'S' /* VERIFICA O TIPO DO CONTEÚDO E ALTERA A LETRA RENDERIZADA PARA PORTUGUÊS-BRASILEIRO */}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs text-justify line-clamp-2">{description}</p>
      </div>
    );
  }

  return (
    <div
      className={`group sm:hidden relative border rounded-sm w-full h-30 overflow-hidden transition-all *:transition-all ${
        active ? 'card-active' : null
      }`}
      key={rest.tabIndex}
      onClick={() => setActive(true)}
      onBlur={() => setActive(false)}
      {...rest}
    >
      <img
        src={coverUrl}
        alt={`Imagem de ${name}`}
        className="brightness-30 group-hover:brightness-100 saturate-30 group-active:saturate-150 group-hover:saturate-150 w-full h-full object-cover aspect-video group-hover:scale-102"
      />
      <div
        id="content-info"
        className="top-0 left-0 absolute group-active:opacity-0 group-hover:opacity-0 p-4 group-active:-translate-x-5 group-hover:-translate-x-5"
      >
        {renderLogoOrName()}
      </div>
      <footer className="bottom-0 left-0 absolute flex flex-row gap-2 bg-white/85 dark:bg-black/85 opacity-0 backdrop-blur-xs m-2 p-2 rounded-sm">
        <Button type="button" variant="ghost" size="icon" title={`Ver página interna de ${name}`}>
          <NotepadText />
          <span className="sr-only">Ver página interna de {name}</span>
        </Button>
        <Button type="button" variant="ghost" size="icon" title={`Visitar site cadastrado de ${name}`}>
          <Globe />
          <span className="sr-only">Visitar site cadastrado de {name}</span>
        </Button>
        <Button type="button" variant="ghost" size="icon" title={`Editar informações de ${name}`}>
          <PencilRuler />
          <span className="sr-only">Editar informações de {name}</span>
        </Button>
        <Button
          type="button"
          variant="destructive"
          size="icon"
          title={`Fechar card`}
          onClick={(e) => {
            e.stopPropagation();
            setActive(false);
          }}
        >
          <Minimize />
          <span className="sr-only">Fechar card</span>
        </Button>
      </footer>
    </div>
  );
}

import './styles.css';

import { type ReactElement, useState } from 'react';

import { CardContent } from '@/components/Card/CardContent';
import { CardFooter } from '@/components/Card/CardFooter';
import { CardHeader } from '@/components/Card/CardHeader';

import { contentStorage } from '@/lib/storage';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  identification: string;
  expanded?: boolean;
  preview?: boolean;
}

export function Card({ identification, expanded, preview, ...rest }: CardProps): ReactElement {
  const [active, setActive] = useState<boolean>(false);

  const { cover, description, title, type, website } = contentStorage.get(identification);

  return (
    <div
      className={`
        ${expanded ? 'card-active' : null} 
        ${preview ? 'pointer-events-none' : null}
        ${active ? 'card-active' : null}
         group sm:hidden relative border rounded-sm w-full h-30 overflow-hidden transition-all *:transition-all ease-in-out *:select-none `}
      onClick={() => setActive(true)}
      onBlur={() => setActive(false)}
      onKeyDown={handleKeyDown}
      key={rest.tabIndex}
      title={title}
      {...rest}
    >
      <img
        src={cover}
        alt={`Imagem de ${title}`}
        className="brightness-30 group-hover:brightness-100 saturate-30 group-active:saturate-150 group-hover:saturate-150 w-full h-full object-cover aspect-video group-hover:scale-102"
      />
      <div
        id="content-info"
        className="top-0 left-0 absolute group-active:opacity-0 group-hover:opacity-0 p-4 w-full group-active:-translate-x-5 group-hover:-translate-x-5"
      >
        <CardHeader name={title} type={type} />
        <CardContent description={description} />
      </div>
      <CardFooter name={title} url={website} setActive={setActive} />
    </div>
  );
}

function handleKeyDown({ currentTarget, code }: React.KeyboardEvent<HTMLDivElement>) {
  // ENTER OU NUMPADENTER FOCA NO CARD E APLICA A CLASSE CARD-ACTIVE
  if (code === 'Enter' || code === 'NumpadEnter') {
    currentTarget.classList.add('card-active');
  }

  // ESC OU TAB REMOVE O FOCO DO CARD REMOVENDO A CLASSE CARD-ACTIVE
  if (code === 'Escape' || code === 'Tab') {
    currentTarget.classList.contains('card-active') ? currentTarget.classList.remove('card-active') : null;
  }

  // SETA PARA DIREITA APLICA CLASSE CARD-ACTIVE E FOCA NO PRIMEIRO BOTÃO DE AÇÃO DO CARD
  // PRECISA ARRUMAR POIS NÃO ESTÁ FUNCIONANDO DIREITO ==================================
  if (code === 'ArrowRight') {
    currentTarget.classList.add('card-active');
    currentTarget.querySelector('footer')?.querySelector('div')?.querySelector('button')?.focus();
  }
}

import { Star } from 'lucide-react';

import { Card } from '@/components/Card';

import type { ReactElement } from 'react';

import { useContext, useEffect } from 'react';
import { ContentContext } from '@/context/ContentContext';
import { contentStorage } from '@/lib/storage';
import type { ContentProps } from '@/types/content';

export function MobileView(): ReactElement {
  const { content, setContent } = useContext(ContentContext);

  useEffect(() => {
    setContent(contentStorage.index());
  }, []);

  function renderCards(content: ContentProps[]): ReactElement[] {
    return content.map((c, index) => {
      return (
        <li>
          <Card name={c.title} description={c.description} coverUrl={c.cover} type={c.type} tabIndex={index} />
        </li>
      );
    });
  }

  return (
    <>
      <div className="sm:hidden flex flex-col gap-1 my-6">
        <div className="flex flex-row items-center gap-3">
          <Star size={18} className="fill-amber-300 text-amber-300" />
          <h1 className="font-bold text-xl">Meus Conteúdos</h1>
        </div>
        <p className="ml-7 font-light text-muted-foreground text-xs">Os filmes e séries que você mais gosta listados abaixo</p>
      </div>
      <main>
        <ul className="flex flex-col gap-4">{renderCards(content)}</ul>
      </main>
    </>
  );
}

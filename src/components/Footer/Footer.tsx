import type { ReactElement } from 'react';

import { Link } from 'react-router';

import { links, type ExternalLinkProps } from '@/settings/ExternalLinks';

export function Footer(): ReactElement {
  function renderExternalLinks(links: ExternalLinkProps[]): ReactElement[] {
    return links.map((link: ExternalLinkProps, index: number) => {
      return (
        <li key={index}>
          <Link to={link.url} title={link.title} tabIndex={index} target="_blank" className="*:size-4">
            {link.icon}
            <span className="sr-only">{link.title}</span>
          </Link>
        </li>
      );
    });
  }

  return (
    <footer className="bg-white/90 dark:bg-black/90 backdrop-blur-md mt-8 p-4 py-6 border-t text-muted-foreground/50">
      <span className="text-xs">Copyright © {new Date().getFullYear()} Nutshell, todos os direitos reservados.</span>
      <div className="flex flex-col gap-4 w-full">
        <ul className="flex flex-row gap-4 mt-4 max-w-min *:hover:text-foreground *:transition-all">{renderExternalLinks(links)}</ul>
        <p className="max-w-120 text-xs text-justify leading-5 *:transition-all">
          Este projeto foi desenvolvido com o objetivo de aplicar conceitos de desenvolvimento front-end. Ressalta-se que esta foi minha
          primeira experiência com algumas tecnologias, tais como{' '}
          <Link
            to="https://tailwindcss.com/"
            target="_blank"
            className="text-primary/75 hover:text-primary hover:underline underline-offset-2"
          >
            TailwindCSS
          </Link>
          ,{' '}
          <Link
            to="https://www.typescriptlang.org/"
            target="_blank"
            className="text-primary/75 hover:text-primary hover:underline underline-offset-2"
          >
            TypeScript
          </Link>
          ,{' '}
          <Link
            to="https://reactrouter.com/"
            target="_blank"
            className="text-primary/75 hover:text-primary hover:underline underline-offset-2"
          >
            React Router
          </Link>{' '}
          e componentes do{' '}
          <Link
            to="https://ui.shadcn.com/"
            target="_blank"
            className="text-primary/75 hover:text-primary hover:underline underline-offset-2"
          >
            Shadcn
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

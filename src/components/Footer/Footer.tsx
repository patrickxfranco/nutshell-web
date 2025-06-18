import type { ReactElement } from 'react';

import { Link } from 'react-router';

import { links, type ExternalLinkProps } from '@/settings/ExternalLinks';

export function Footer(): ReactElement {
  function renderExternalLinks(links: ExternalLinkProps[]): ReactElement[] {
    return links.map((link: ExternalLinkProps, index: number) => {
      return (
        <li>
          <Link to={link.url} title={link.title} key={index} tabIndex={index} target="_blank" className="*:size-4">
            {link.icon}
            <span className="sr-only">{link.title}</span>
          </Link>
        </li>
      );
    });
  }

  return (
    <footer className="bg-white/90 dark:bg-black/90 backdrop-blur-md mt-8 p-4">
      <span className="text-muted-foreground text-sm">
        Copyright © {new Date().getFullYear()} Nutshell, todos os direitos reservados.
      </span>
      <ul className="flex flex-row gap-4 mt-4 max-w-min *:hover:text-foreground *:text-muted *:transition-all">
        {renderExternalLinks(links)}
      </ul>
    </footer>
  );
}

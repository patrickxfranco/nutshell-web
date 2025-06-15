import type { ReactElement } from 'react';
import { AvatarArea } from '@/components/Header/AvatarArea';
import { LogoArea } from '@/components/Header/LogoArea';
import { SearchArea } from '@/components/Header/SearchArea';

export function Header(): ReactElement {
  return (
    <header className="fixed flex flex-row justify-between items-center gap-2 bg-white/90 dark:bg-black/90 backdrop-blur-md p-4 border-b min-w-screen">
      <LogoArea />
      <SearchArea />
      <AvatarArea />
    </header>
  );
}

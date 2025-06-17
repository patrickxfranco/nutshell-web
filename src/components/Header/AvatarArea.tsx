import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { ReactElement } from 'react';

export function AvatarArea(): ReactElement {
  return (
    <>
      <Avatar className="rounded-sm w-10 h-10">
        <AvatarFallback className="rounded-sm">PF</AvatarFallback>
        <AvatarImage src="https://www.github.com/patrickxfranco.png" />
      </Avatar>
    </>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { ReactElement } from 'react';

export function AvatarArea(): ReactElement {
  return (
    <div>
      <Avatar className="rounded-sm size-9">
        <AvatarFallback className="rounded-sm">PF</AvatarFallback>
        <AvatarImage src="https://www.github.com/patrickxfranco.png" />
      </Avatar>
    </div>
  );
}

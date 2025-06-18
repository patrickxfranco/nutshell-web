import type { ReactElement } from 'react';

interface CardContentProps {
  description?: string;
}

export function CardContent({ description }: CardContentProps): ReactElement {
  return (
    <main className="w-full">
      <p className="text-muted/70 dark:text-muted-foreground text-xs text-justify line-clamp-2">{description}</p>
    </main>
  );
}

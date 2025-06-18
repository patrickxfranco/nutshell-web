import { Globe, Minimize, NotepadText, PencilRuler } from 'lucide-react';

import { Button } from '@/components/ui/button';

import type { ButtonVariants } from '@/components/ui/button';

import type { ReactElement } from 'react';

interface CardFooterProps {
  name: string;
  setActive: Function;
}

interface OptionButton {
  title: string;
  icon: ReactElement;
  variant: ButtonVariants;
  onClick?: Function;
}

export function CardFooter({ name, setActive }: CardFooterProps): ReactElement {
  const optionButtons = getOptionButtons(name, setActive);

  function renderButtons(optionButtons: OptionButton[]): ReactElement[] {
    return optionButtons.map((button, index) => {
      return (
        <Button
          type="button"
          variant={button.variant}
          size="icon"
          title={button.title}
          key={index}
          onClick={
            button.onClick
              ? (e) => {
                  e.stopPropagation();
                  button.onClick?.(false);
                }
              : undefined
          }
        >
          {button.icon}
          <span className="sr-only">{button.title}</span>
        </Button>
      );
    });
  }

  return (
    <footer className="bottom-0 left-0 absolute opacity-0 w-full">
      <div className="flex flex-row gap-2 bg-white/85 dark:bg-black/85 backdrop-blur-xs m-2 p-2 rounded-sm max-w-min">
        {renderButtons(optionButtons)}
      </div>
    </footer>
  );
}

function getOptionButtons(name: string, setActive: Function): OptionButton[] {
  return [
    {
      title: `Ver página interna de ${name}`,
      icon: <NotepadText />,
      variant: 'ghost',
    },
    {
      title: `Visitar site cadastrado de ${name}`,
      icon: <Globe />,
      variant: 'ghost',
    },
    {
      title: `Editar informações de ${name}`,
      icon: <PencilRuler />,
      variant: 'ghost',
    },
    {
      title: `Fechar card`,
      icon: <Minimize />,
      variant: 'destructive',
      onClick: setActive,
    },
  ];
}

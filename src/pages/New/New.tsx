import type { ReactElement } from 'react';

import { Info } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  title: string;
  type: string;
  url: string;
  cover: string;
  description: string;
}

export function New(): ReactElement {
  const { register, handleSubmit, control } = useForm<FormData>();

  function handleAdd(data: FormData) {
    console.log(data);
  }

  return (
    <div className="mx-4 pt-4">
      <form className="flex flex-col gap-8 mt-8" onSubmit={handleSubmit(handleAdd)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="content-title" className="text-muted-foreground text-sm">
            Título do conteúdo
          </label>
          <Input id="content-title" type="text" placeholder="Game Of Thrones" className="!bg-transparent h-11" {...register('title')} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content-type" className="text-muted-foreground text-sm">
            Tipo do conteúdo
          </label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <RadioGroup className="flex flex-row items-center gap-4" value={field.value} onValueChange={field.onChange}>
                <div className="flex flex-row items-center gap-2">
                  <RadioGroupItem id="type-movie" value="M" />
                  <Label htmlFor="type-movie">Filme</Label>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <RadioGroupItem id="type-serie" value="S" />
                  <Label htmlFor="type-serie">Seriado</Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content-website" className="text-muted-foreground text-sm">
            URL do site do conteúdo
          </label>
          <Input
            id="content-website"
            type="url"
            placeholder="https://www.max.com/br/pt/shows/game-of-thrones"
            className="!bg-transparent h-11"
            {...register('url')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content-cover" className="text-muted-foreground text-sm">
            URL da capa do conteúdo
          </label>
          <Input
            id="content-cover"
            type="url"
            placeholder="https://www.images.com/got.jpeg"
            className="!bg-transparent h-11"
            {...register('cover')}
          />
          <span className="flex flex-row items-start gap-2 group-focus:bg-red-500 mt-1 font-light text-blue-300/80 text-xs">
            <Info className="pt-1 max-w-min max-h-min" />
            Informação importante: se usar imagens com resoluções exorbitantes o seu uso de dados poderá ficar acima do esperado, de
            preferência por imagens otimizadas.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content-description" className="text-muted-foreground text-sm">
            Descrição do conteúdo
          </label>
          <Textarea
            id="content-description"
            placeholder="Seriado brabo demais"
            className="!bg-transparent min-h-50"
            {...register('description')}
          />
        </div>
        <Button type="submit" variant="secondary" className="h-11">
          Adicionar a minha lista
        </Button>
      </form>
    </div>
  );
}

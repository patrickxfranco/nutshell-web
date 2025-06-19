import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';

import { formSchema, onSubmit } from './formSchema';

import { Field } from './FormField';

import type z from 'zod';

export function NewForm(): ReactElement {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      type: '',
      coverUrl: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Field form={form} name="title" description="Nome do conteúdo" children={<Input placeholder="Game Of Thrones" />} />
        <Field
          form={form}
          name="description"
          description="Descrição do conteúdo"
          children={<Textarea placeholder="Seriado com dragões e espadas" className="min-h-60" />}
        />

        <Field
          form={form}
          name="type"
          description="Tipo do conteúdo"
          children={
            <RadioGroup className="flex flex-row gap-8 mt-2">
              <div className="flex flex-row items-center gap-2">
                <RadioGroupItem id="option-movie" value="M" />
                <Label htmlFor="option-movie">Filme</Label>
              </div>
              <div className="flex flex-row items-center gap-2">
                <RadioGroupItem id="option-serie" value="S" />
                <Label htmlFor="option-serie">Seriado</Label>
              </div>
            </RadioGroup>
          }
        />
        <Field
          form={form}
          name="coverUrl"
          description="Endereço da Capa"
          children={<Input placeholder="https://www.images.com/got.jpg" />}
        />
        <Button type="submit" className="w-full">
          Adicionar
        </Button>
      </form>
    </Form>
  );
}

import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Você deve preencher o título com pelo menos 1 caractere.',
  }),
  description: z.string(),
  type: z.string().max(1).nonempty({ message: 'Você deve selecionar uma opção.' }),
  coverUrl: z.string(),
});

export function NewForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      type: '',
      coverUrl: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>): void {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormDescription className="text-xs">Título do conteúdo</FormDescription>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => {
            return (
              <FormItem>
                <FormDescription className="text-xs">Descrição do conteúdo</FormDescription>
                <FormControl>
                  <Textarea {...field} className="min-h-60" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => {
            return (
              <FormItem>
                <FormDescription className="text-xs">Tipo do conteúdo</FormDescription>
                <FormControl className="my-2">
                  <RadioGroup className="flex flex-row gap-8 mt-2" value={field.value} onValueChange={field.onChange}>
                    <div className="flex flex-row items-center gap-2">
                      <RadioGroupItem id="option-movie" checked={field.value === 'M'} value="M" />
                      <Label htmlFor="option-movie">Filme</Label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <RadioGroupItem id="option-serie" checked={field.value === 'S'} value="S" />
                      <Label htmlFor="option-serie">Seriado</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="coverUrl"
          render={({ field }) => {
            return (
              <FormItem>
                <FormDescription className="text-xs">Endereço da capa</FormDescription>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full">
          Adicionar
        </Button>
      </form>
    </Form>
  );
}

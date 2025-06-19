import z from 'zod';

export const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Você deve preencher o título com pelo menos 1 caractere.',
  }),
  description: z.string(),
  type: z.string().max(1).nonempty({ message: 'Você deve selecionar uma opção.' }),
  coverUrl: z.string().url({ message: 'Neste campo você deve inserir uma URL' }),
});

export function onSubmit(values: z.infer<typeof formSchema>): void {
  console.log(values);
}

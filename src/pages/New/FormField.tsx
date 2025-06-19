import type { ReactElement } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import React from 'react';

import { FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form';

import { formSchema } from './formSchema';

import type z from 'zod';

interface FieldProps {
  children: ReactElement<any>;
  form: UseFormReturn<z.infer<typeof formSchema>>;
  name: 'title' | 'description' | 'type' | 'coverUrl';
  description?: string;
}

export function Field({ children, form, name, description }: FieldProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormDescription className="text-xs">{description}</FormDescription>
            <FormControl>{React.cloneElement(children, { ...children.props, field })}</FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

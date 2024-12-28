import React from 'react';
import { FormField, FormLabel, FormControl, FormMessage } from './form';
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod';
import { Input } from '@/components/ui/input';

const formSchema = authFormSchema('sign-up'); // Define schema outside for reuse

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>; // Use type inference from Zod schema
  name: FieldPath<z.infer<typeof formSchema>>; // Ensure the name matches schema fields
  label: string; // Label for the input
  placeholder: string; // Placeholder text for the input
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full">
            <FormControl>
            <Input
              placeholder={placeholder}
              className="input-class"
              value={field.value || ""} // Fallback to an empty string
              onChange={field.onChange} // Ensure it updates
              type={name === 'password' ? 'password' : 'text'}
            />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
import { Controller, Control } from 'react-hook-form';
import { Input, InputProps } from '../Input';
import { TextError } from './styles';
import React from 'react';

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: string;
}

export const ControlledInput = ({ control, name, error, ...rest }: Props) => {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}        
            />
        )}
        name={name}
      />
      {
        error && <TextError>{error}</TextError>
      }
    </>
  );
};
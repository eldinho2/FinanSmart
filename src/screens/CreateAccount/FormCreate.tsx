import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container } from './styles';
import { object, ref, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledInput } from '../../components/ControlledInput';

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = object().shape({
  email: string().email("E-mail Inválido").required("Informe um E-mail"),
  password: string().min(8, "A senha precisa ter ao menos 8 digitos").required("Informe uma senha"),
  confirmPassword: string().oneOf([ref('password'), null], 'As senhas precisam ser iguais'),
});

export default function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: FormData) {
    Alert.alert(data.email, data.confirmPassword);
  }

  return (
    <Container>
      <ControlledInput
        control={control}
        name='email'
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
        autoCorrect={false}
        error={errors.email?.message}
      />
      <ControlledInput
        control={control}
        name='password'
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        error={errors.password?.message}
      />
      <ControlledInput
        control={control}
        name='confirmPassword'
        icon="lock"
        placeholder="Confirmar Senha"
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        error={errors.confirmPassword?.message}
      />
      <Button
        title="Cadastrar"
        onPress={handleSubmit(handleUserRegister)}
      />
    </Container>
  )
}
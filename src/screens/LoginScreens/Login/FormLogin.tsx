import React from 'react';
import { Button } from '../../../components/Button';
import { ControlledInput } from '../../../components/ControlledInput';
import { Container } from './styles';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
  email: string;
  password: string;
}

const schema = object().shape({
  email: string().email("E-mail Inválido").required("Informe um E-mail"),
  password: string().min(8, "A senha precisa ter ao menos 8 digitos").required("Informe uma senha"),
});

export default function Form({navigation}: any) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const handleUserRegister = (data:FormData)=> {
    navigation.navigate('Home');
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
      <Button
        title="Entrar"
        onPress={handleUserRegister}
      />
    </Container>
  )
}

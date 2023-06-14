import React from "react";
import { Container, Title, TextButton } from "./styles";

interface LoginFooterProps {
  isLogin?: boolean;
  navigation?: any;
}

const LoginFooter = ({ isLogin, navigation }: LoginFooterProps) => {
  const handleNavigate = () => {
    navigation.navigate(isLogin ? 'CreateAccount' : 'Login');
  }

  return (
    <Container>
      <Title>
        {isLogin ? `Não tem uma conta?` : `Já tem uma conta?`}
      </Title>
      <TextButton
        onPress={handleNavigate}
      >
        {isLogin ? `Cadastre-se` : `Entre`}
      </TextButton>
    </Container>
  )
}

export default LoginFooter;
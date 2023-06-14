import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Wrapper } from './styles';

interface PropsHeader {
  isLogin?: boolean;
}

export default function Header({ isLogin }: PropsHeader) {
  return (
    <Container>
      <Wrapper isLogin={ isLogin }>
      {isLogin ? (null) : (
        <Title>
        Crie sua{'\n'}conta
      </Title>
      )}
      <Image
        source={require('../../../assets/logo/logotransparent.png')}
        style={{ width: 140, height: 170 }}
       />
      </Wrapper>
    </Container>
  )
}
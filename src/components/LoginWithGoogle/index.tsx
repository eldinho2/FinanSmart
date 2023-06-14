import React, { useState } from 'react';
import { Container, TextContainer, Text, Line, SinginGoogle } from './styles';
import * as AuthSession from 'expo-auth-session';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

type Response = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
    error?: string;
  }
}

export default function LoginWithGoogle() {
  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = "844498551150-n8sbod7u0gjo9234lqjtqgu0q2ji259m.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@eldinho2/finansmart";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as Response;

      console.log({ type, params });
      
      if(type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const userInfo = await response.json();
        console.log(userInfo);
      }

    } catch(e) {
      console.log(e);
    }
  }
  
  return (
    <Container>
      <TextContainer>
      <Line />
        <Text>OU</Text>
      <Line />
      </TextContainer>
      <SinginGoogle>
        <FontAwesome.Button style={styles.button} name="google" color={'black'} backgroundColor="#ffffff" onPress={handleGoogleSignIn}>
          <Text>Continuar com Google</Text>
        </FontAwesome.Button>
      </SinginGoogle>
    </Container>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',
  },
});
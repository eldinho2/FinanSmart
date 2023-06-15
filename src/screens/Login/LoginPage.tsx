import React from "react";
import Form from "./FormLogin";
import Header from "../../components/Header";
import LoginFooter from "../../components/LoginFooter";
import LoginWithGoogle from "../../components/LoginWithGoogle";


import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Container } from "./styles";

function LoginPage({navigation}) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header isLogin={true} />
            <Form navigation={navigation} />
            <LoginFooter isLogin={true} navigation={navigation} />
            <LoginWithGoogle/>
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}

export default LoginPage;

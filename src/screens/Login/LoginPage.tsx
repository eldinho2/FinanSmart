import React from "react";
import Form from "./FormLogin";
import Header from "../../components/Header";
import LoginFooter from "../../components/LoginFooter";

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Container } from "./styles";

function LoginPage() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header isLogin={true} />
            <Form />
            <LoginFooter />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}

export default LoginPage;

import React from "react";
import Form from "./FormCreate";
import Header from "../../components/Header";
import LoginFooter from "../../components/LoginFooter";

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Container } from "./styles";

function CreateAccount() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header />
            <Form />
            <LoginFooter />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}

export default CreateAccount;

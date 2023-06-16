import React from "react";
import Form from "./FormCreate";
import Header from "../../../components/Header";
import LoginFooter from "../../../components/LoginFooter";
import LoginWithGoogle from "../../../components/LoginWithGoogle";

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Container } from "./styles";

function CreateAccount({navigation}) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header />
            <Form />
            <LoginFooter navigation={navigation} />
            <LoginWithGoogle/>
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container >
  );
}

export default CreateAccount;

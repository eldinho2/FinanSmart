import React from "react";
import { MainButton } from "./styles";
import { Feather } from "@expo/vector-icons";

function AddBillButton({navigation}) {
  return (
    <>
      <MainButton onPress={() => navigation.navigate('AddBill')}>
        <Feather name="plus" size={24} color="#0b280c" />
      </MainButton>
    </>
  );
}

export default AddBillButton;

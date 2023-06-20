import React, { useState } from "react";
import {
  Container,
  InputText,
  InputTextDescription,
  AddButton,
  Text,
} from "./styles";
import { Alert } from "react-native";
import DateInput from "../../components/DateInput";

interface FormData {
  amount: string;
  date: string;
  description: string;
}

export function AddBill() {
  const [formData, setFormData] = useState<FormData>({
    amount: "",
    date: new Date().toLocaleDateString('pt-BR', {year: 'numeric', month: 'long', day: 'numeric'}),
    description: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const updateDate = (date) => {
    const fomatedDate = date.toLocaleDateString('pt-BR', {year: 'numeric', month: 'long', day: 'numeric'})
    handleChange('date', fomatedDate)
  }
  
  const handleSubmit = () => {
    Alert.alert(formData.amount, formData.date);
  };

  return (
    <Container>
      <InputText
        onChangeText={(value) => handleChange("amount", value)}
        value={formData.amount}
        placeholder="Montante"
        keyboardType="numeric"
      />
      <DateInput updateDate={updateDate} />
      <InputTextDescription
        onChangeText={(value) => handleChange("description", value)}
        value={formData.description}
        placeholder="Descrição"
      />
      <AddButton onPress={() => handleSubmit()}>
        <Text>Adicionar</Text>
      </AddButton>
    </Container>
  );
}

export default AddBill;

import React, { useState } from "react";
import {
  Container,
  InputText,
  InputTextDescription,
  AddButton,
  Text,
  AddButtonText,
  InputWrapper,
} from "./styles";
import { Alert, Keyboard, TouchableOpacity } from "react-native";
import DateInput from "../../components/DateInput";
import ShowRepetitionOptions from "../../components/ShowRepetitionOptions";
import Calculator from "../../components/Calculator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface FormData {
  amount: string;
  date: string;
  description: string;
  repetition?: string;
}

export function AddIncome() {
  const [showRepetition, setShowRepetition] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    amount: "",
    date: new Date().toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description: "",
    repetition: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const updateDate = (date) => {
    const fomatedDate = date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    handleChange("date", fomatedDate);
  };

  const handleRepetition = (data?: string) => {
    Keyboard.dismiss();
    setShowRepetition(!showRepetition);
    handleChange("repetition", data);
  };

  const handleCalculator = () => {
    setShowCalculator(!showCalculator);
  };

  const handleSubmit = () => {
    Alert.alert(formData.repetition, formData.description);
  };

  return (
    <Container>
      <InputWrapper>
        <MaterialCommunityIcons name="cake" size={26} />
        <InputText
          onChangeText={(value) => handleChange("amount", value)}
          value={formData.amount}
          placeholder="Montante"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => handleCalculator()}>
          <MaterialCommunityIcons name="calculator-variant-outline" size={26} />
        </TouchableOpacity>
      </InputWrapper>
      <InputWrapper>
        <MaterialCommunityIcons name="calendar" size={26} />
        <DateInput updateDate={updateDate} />
      </InputWrapper>
      <InputWrapper>
        <MaterialCommunityIcons name="application-edit-outline" size={26} />
        <InputTextDescription
          onChangeText={(value) => handleChange("description", value)}
          value={formData.description}
          placeholder="Descrição"
        />
      </InputWrapper>
      <AddButtonText onPress={() => handleRepetition()}>
        <Text>Selecionar Opção de Repetição</Text>
        <MaterialCommunityIcons name="arrow-u-left-top" size={26} />
      </AddButtonText>
      <AddButton onPress={() => handleSubmit()}>
        <Text>Adicionar</Text>
      </AddButton>
      {showRepetition && (
        <ShowRepetitionOptions handleRepetition={handleRepetition} />
      )}
      {showCalculator && <Calculator handleCalculator={handleCalculator} />}
    </Container>
  );
}

export default AddIncome;

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
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface FormData {
  amount: string;
  date: string;
  description: string;
  repetition?: string;
}

export function AddIncome() {
  const [showRepetition, setShowRepetition] = useState(false);
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

  const handleChange = (field: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const updateDate = (date: Date) => {
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
    handleChange("repetition", data ? data : 'Diariamente');
  };

  const handleSubmit = async () => {
    Alert.alert('Sucesso', 'Renda adicionada com sucesso')
  }

  return (
    <Container>
      <InputWrapper>
        <Feather name={'align-left'} size={24} />
          <InputText
            onChangeText={(value: any) => handleChange("name", value)}
            value={formData.amount}
            placeholder="Nome"
          />
      </InputWrapper>
      <InputWrapper>
      <Feather name={'dollar-sign'} size={24} />
        <InputText
          onChangeText={(value: any) => handleChange("amount", value)}
          value={formData.amount}
          placeholder="Montante"
          keyboardType="numeric"
        />
      </InputWrapper>
      <InputWrapper>
        <MaterialCommunityIcons name="calendar" size={26} />
        <DateInput updateDate={updateDate} />
      </InputWrapper>
      <InputWrapper>
        <MaterialCommunityIcons name="application-edit-outline" size={26} />
        <InputTextDescription
          onChangeText={(value: any) => handleChange("description", value)}
          value={formData.description}
          placeholder="Descrição"
        />
      </InputWrapper>
      <AddButtonText onPress={() => handleRepetition()}>
        <Text>{formData.repetition ? `Irá repetir ${formData.repetition}` : 'Selecionar Opção de Repetição'}</Text>
        <MaterialCommunityIcons name="arrow-u-left-top" size={26} />
      </AddButtonText>
      <AddButton onPress={() => handleSubmit()}>
        <Text>Adicionar</Text>
      </AddButton>
      {showRepetition && (
        <ShowRepetitionOptions handleRepetition={handleRepetition} />
      )}
    </Container>
  );
}

export default AddIncome;

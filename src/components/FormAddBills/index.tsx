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
import { Alert, Keyboard } from 'react-native';
import DateInput from "../../components/DateInput";
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ShowRepetitionOptions from "../../components/ShowRepetitionOptions";
import { getRealm } from '../../database/realm'
import uuid from 'react-native-uuid'
import { NavigationProp } from "@react-navigation/native";
import { ControlledInput } from '../ControlledInput';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type AddBillRouteParams = {
  goBack: () => void;
};

type AddBillNavigationProp = NavigationProp<AddBillRouteParams>;

interface FormData {
  name: string;
  amount: string;
  date: string;
  description: string;
  repetition?: string;
}

export function FormAddBills({ navigation, isBill }: { navigation: AddBillNavigationProp, isBill: boolean }) {
  const [showRepetition, setShowRepetition] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    amount: "",
    date: new Date().toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    description: "",
    repetition: "Diariamente",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const updateDate = (date: { toLocaleDateString: (arg0: string, arg1: { year: string; month: string; day: string; }) => any; }) => {
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

  const goBack = () => {
    navigation.goBack();
  }

  const handleSubmit = async() => {
    const realm = await getRealm();
    try {
      realm.write(() => {
        realm.create('BillObjectSchema', {
          _id: uuid.v4(),
          name: formData.name,
          amount: formData.amount,
          date: formData.date,
          description: formData.description,
          repetition: formData.repetition,
          created_at: new Date(),
          isBill: isBill ? true : false
        })
      })
      goBack();
      
      Alert.alert('Conta adicionada com sucesso!');
    } catch (error) {
      console.log(error);
      
      Alert.alert('Algo deu errado');
    } finally {
      realm.close();
    }
  };


  return (
    <Container>
      <InputWrapper>
      <Feather name={'align-left'} size={24} />
        <InputText
          onChangeText={(value: any) => handleChange("name", value)}
          value={formData.name}
          placeholder={isBill ? "Nome da Despesa" : "Nome da Renda"}
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

export default FormAddBills;

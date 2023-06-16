import React, { useState } from "react";
import {
  Container,
  InputText,
  InputTextDescription,
  AddButton,
  Text,
} from "./styles";
import { Alert, Platform, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface FormData {
  amount: string;
  description: string;
}

export function AddBill({ navigation }) {
  const [showPicker, setShowPicker] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [date, setDate] = useState('');
  const [formData, setFormData] = useState<FormData>({
    amount: "",
    description: "",
  });

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const Onchange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setCurrentDate(currentDate);
      setDate(currentDate.toDateString());

      if (Platform.OS === "android") {
        toggleDatePicker();
        setCurrentDate(currentDate.toDateString());
      }

    } else {
      toggleDatePicker();
    }
  };

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    Alert.alert(formData.amount, formData.description);
  };

  const state = navigation.getState();
  const name = state.routes[state.index].name;

  console.log(name);

  return (
    <Container>
      <InputText
        onChangeText={(value) => handleChange("amount", value)}
        value={formData.amount}
        placeholder="Montante"
        keyboardType="numeric"
      />
      <Container>
      <Text>Date</Text>
        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={currentDate}
            onChange={Onchange}
          />
        )}
        {!showPicker && (
          <Pressable onPress={toggleDatePicker}>
            <InputText
             value={date}
             placeholder="Data"
             editable={false} />
          </Pressable>
        )}
      </Container>
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

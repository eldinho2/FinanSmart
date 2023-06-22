import { View, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { InputTextDate } from "../../screens/AddBills/styles";

interface DateInputProps {
  updateDate: (date: Date) => void;
}

const DateInput = ({ updateDate }: DateInputProps) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    updateDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };


  return (
    <View>
      <TouchableOpacity onPress={showDatepicker}>
      <InputTextDate placeholder={date.toLocaleDateString('pt-BR', {year: 'numeric', month: 'long', day: 'numeric'})} placeholderTextColor="#000000" editable={false} />
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
          locale='pt-BR'
        />
      )} 
    </View>
  );
};

export default DateInput;

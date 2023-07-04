import styled from "styled-components/native";

export type activeOption = {
  status: 'Despesa' | 'Renda';
};

export const Container = styled.View`
  background-color: #fff;
  margin-bottom: 10px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const Option = styled.TouchableOpacity`
    background-color: red;
`;

export const OptionText = styled.Text`
  font-size: 18px;
`;
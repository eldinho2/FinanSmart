import styled from "styled-components/native";

export type status = {
  status: string
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

export const OptionRenda  = styled.TouchableOpacity<status>`
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.status === 'Renda' ? 'black' : 'transparent'};
`;

export const OptionDespesa = styled.TouchableOpacity<status>`
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.status === 'Despesa' ? 'black' : 'transparent'};
`;


export const OptionTextDespesa = styled.Text`
  font-size: 18px;
`;

export const OptionTextRenda = styled.Text`
  font-size: 18px;
`;
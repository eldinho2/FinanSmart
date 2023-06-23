import styled from 'styled-components/native';

export const Conteiner = styled.TouchableOpacity`
  background-color: #ccc;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 10px;
  flex: 1;
`;

export const InfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoFooter = styled.View`
  flex-direction: row;
`;

export const Options = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;

export const InfosExpanded = styled.View`

`;

export const Type = styled.View`
  height: 100%;
  width: 10px;
  background-color: blue;
  margin-right: 18px;
`;

export const Name = styled.Text`
  font-size: 20px;
`;

export const Description = styled.Text`
  font-size: 15px;
`;

export const Amount = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
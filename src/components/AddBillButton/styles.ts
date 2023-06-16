import styled from 'styled-components/native';

export const MainButton = styled.TouchableOpacity`
  border-radius: 25px;
  background-color: #97e095;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 20%;
  right: 10%;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 25px;
  background-color: #97e095;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 40px;
  padding: 0 14px;
  gap: 16px;
`;

export const BottomSelectorOverlay = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: #000000aa;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

export const BottomSelector = styled.View`
  width: 100%;
  height: 100px;
  background-color: #97e095;
  position: absolute;
  bottom: 8%;
  align-items: center;
  justify-content: center;
`;

export const BottomSelectorText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
`;
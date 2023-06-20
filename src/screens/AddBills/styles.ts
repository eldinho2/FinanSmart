import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 14px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
  margin: 10px 0px;
`;

export const InputText = styled.TextInput`
  width: 80%;
  margin: 4px 0px;
	border-bottom-width: 1px;
  padding: 10px;
`;

export const InputTextDate = styled.TextInput`
  width: 100%;
  margin: 4px 0px;
	border-bottom-width: 1px;
  padding: 10px;
`;

export const InputWrapper = styled.View`
	gap: 4px;
	align-items: center;
	flex-direction: row;
`;

export const InputTextDescription = styled.TextInput`
  width: 90%;
  margin: 4px 0px;
	border-bottom-width: 1px;
  padding: 10px;
  height: 100px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #ccc;
  border-radius: 10px;
  border-color: #ccc;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

export const AddButtonText = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
  font-size: 16px;
  color: #fff;
	padding: 0 10px;
  height: 50px;
  background-color: #ccc;
  border-radius: 10px;
  border-color: #ccc;
	margin-top: 14px;
`;

export const Overlay = styled.TouchableOpacity`
	width: 1000px;
	height: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50%;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	padding: 10px;
	background-color: #e3f7e1;
`;

export const ModalTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 10px;
	text-align: center;
`;

export const ModalOptions = styled.View`
	flex-direction: row;
	justify-content: space-between;
	gap: 4px;
`;

export const ModalOption = styled.TouchableOpacity`
	border-radius: 10px;
	border: 1px solid #2d8e2b;
	justify-content: space-between;
	align-items: center;
	padding: 4px;
	background-color: #98df96;
`;



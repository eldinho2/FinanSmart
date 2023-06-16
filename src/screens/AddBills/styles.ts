import styled from 'styled-components/native';


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
    width: 100%;
    margin: 4px 0px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px;
`;

export const InputTextDescription = styled.TextInput`
    width: 100%;
    margin: 4px 0px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    height: 100px;
`;

export const AddButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
`;
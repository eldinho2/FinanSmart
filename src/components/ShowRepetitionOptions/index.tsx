import React from "react";
import {
  Overlay,
  ModalContainer,
  ModalTitle,
  ModalOptions,
  ModalOption,
  Text,
} from "../../screens/AddBills/styles";

const showRepetitionOptions = ({ handleRepetition }) => {
  return (
    <>
      <Overlay onPress={() => handleRepetition()} />
          <ModalContainer>
            <ModalTitle>Selecione a Recorrência</ModalTitle>
            <ModalOptions>
              <ModalOption onPress={() => handleRepetition("Diariamente")}>
                <Text>Diariamente</Text>
              </ModalOption>
              <ModalOption onPress={() => handleRepetition("Semanalmente")}>
                <Text>Semanalmente</Text>
              </ModalOption>
              <ModalOption onPress={() => handleRepetition("Mensalmente")}>
                <Text>Mensalmente</Text>
              </ModalOption>
            </ModalOptions>
          </ModalContainer>
    </>
  );
};

export default showRepetitionOptions;

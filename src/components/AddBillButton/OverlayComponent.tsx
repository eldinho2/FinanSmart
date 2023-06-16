import React from "react";
import {
  Button,
  BottomSelector,
  BottomSelectorOverlay,
  BottomSelectorText,
} from "./styles";
import { OverlayContext } from "../../contexts/OverlayContext";
import { Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useContext } from "react";

function OverlayComponent() {
  const { overlayOpen, toggleOverlay } = useContext(OverlayContext);

  return (
    <BottomSelectorOverlay
      activeOpacity={1}
      onPress={() => {
        toggleOverlay();
      }}
    >
      <BottomSelector>
        <Button
          onPress={() => {
            Alert.alert("Cadastrar conta");
            toggleOverlay();
          }}
        >
          <Feather name="dollar-sign" size={24} color="#0b280c" />
          <BottomSelectorText>Conta</BottomSelectorText>
        </Button>
        <Button
          onPress={() => {
            Alert.alert("Cadastrar categoria");
            toggleOverlay();
          }}
        >
          <Feather name="tag" size={24} color="#0b280c" />
          <BottomSelectorText>Categoria</BottomSelectorText>
        </Button>
      </BottomSelector>
    </BottomSelectorOverlay>
  );
}

export default OverlayComponent;

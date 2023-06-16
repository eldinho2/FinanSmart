import React from "react";
import { MainButton } from "./styles";
import { Feather } from "@expo/vector-icons";
import { OverlayContext } from '../../contexts/OverlayContext';
import { useContext } from "react";

function AddBillButton() {
  const { overlayOpen, toggleOverlay } = useContext(OverlayContext);
  return (
    <>
      <MainButton onPress={() => toggleOverlay()}>
        <Feather name="plus" size={24} color="#0b280c" />
      </MainButton>
    </>
  );
}

export default AddBillButton;

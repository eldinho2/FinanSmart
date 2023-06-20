import React from "react";
import {
  Overlay,
  ModalContainer,
} from "../../screens/AddBills/styles";

import {
  CalculatorInput,
  CalculatorNumber,
} from './styles'

const Calculator = ({handleCalculator}) => {
  return (
    <>
      <Overlay onPress={() => handleCalculator()} />
          <ModalContainer>
            <CalculatorInput />
            <CalculatorNumber>7</CalculatorNumber>
            <CalculatorNumber>8</CalculatorNumber>
            <CalculatorNumber>9</CalculatorNumber>
            <CalculatorNumber>4</CalculatorNumber>
            <CalculatorNumber>5</CalculatorNumber>
            <CalculatorNumber>6</CalculatorNumber>
            <CalculatorNumber>1</CalculatorNumber>
            <CalculatorNumber>2</CalculatorNumber>
            <CalculatorNumber>3</CalculatorNumber>
            <CalculatorNumber>0</CalculatorNumber>
          </ModalContainer>
    </>
  );
};

export default Calculator;

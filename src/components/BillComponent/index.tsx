import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Conteiner,
  Content,
  InfoHeader,
  InfoFooter,
  InfosExpanded,
  Type,
  Name,
  Description,
  Amount,
  Options,
} from "./styles";

type BillComponent = {
  _id: string;
  name: string;
  amount: string;
  date: string;
  description: string;
  repetition: string;
  created_at: Date;
  isBill: boolean;
};

type Props = {
  props: BillComponent;
};

const BillComponent = ({ props }: Props) => {
  const [isShow, setisShow] = useState(false);
  
  const truncateText = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  const handleShow = () => {
    setisShow(!isShow);
  };

  const formatAmmount = Number(props.amount).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });


  return (
    <Conteiner onPress={() => handleShow()}>
      <Type />
      <Content>
        {!isShow && (
          <>
            <InfoHeader>
              <Name>{truncateText(props.name, 12)}</Name>
              <Amount>{truncateText(formatAmmount, 12)}</Amount>
            </InfoHeader>
            <InfoFooter>
              <Description>
                {truncateText(props.description, 12)} e {props.date}
              </Description>
            </InfoFooter>
          </>
        )}
        {isShow && (
          <InfosExpanded>
            <Name>{props.name}</Name>
            <Amount>{formatAmmount}</Amount>
            <Description>{props.description}</Description>
            <Options>
              <Feather name="edit-3" size={24} color="black" />
              <Feather name="trash" size={24} color="black" />
            </Options>
          </InfosExpanded>
        )}
      </Content>
    </Conteiner>
  );
};

export default BillComponent;

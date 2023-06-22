import React from 'react'
import { Conteiner, Info, Type, Name, Description, Amount  } from './styles'

type BillComponent = {
  _id: string;
  name: string;
  amount: string;
  date: string;
  description: string;
  repetition: string;
  created_at: Date;
  isBill: boolean;
}

type Props = {
  props: BillComponent;
}

const BillComponent = ({ props }:Props) => {
  return (
    <Conteiner>
      <Type />
      <Info>
      <Name>{props.name}</Name>
      <Description>{props.description} e {props.date}</Description>
      </Info>
      <Amount>{props.amount}</Amount>
    </Conteiner>
  )
}

export default BillComponent;
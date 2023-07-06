import React from "react";
import FormAddBills from "../../components/FormAddBills";
import { NavigationProp } from "@react-navigation/native";

type AddBillRouteParams = {
  goBack: () => void;
};

type AddBillNavigationProp = NavigationProp<AddBillRouteParams>;

export function AddIncome({ navigation }: { navigation: AddBillNavigationProp }) {
  return (
    <FormAddBills navigation={navigation} isBill={false} />
  );
}

export default AddIncome;

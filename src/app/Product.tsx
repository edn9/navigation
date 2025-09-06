import { View } from "react-native";
//import { Route, useRoute } from "@react-navigation/native";

import { StackRoutesProps } from "@/routes/StackRoutes";
import { BottomRoutesProps } from "@/routes/BottomRoutes";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";
//import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";

//type RouteParams = StackRoutesProps<"Product">;

export function Product({ navigation, route }: DrawerRoutesProps<"Product">) {
  //const { params } = useRoute<RouteParams["route"]>();

  //const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 16, paddingTop: 27 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        ></ButtonIcon>
        <Title>Product {route.params?.id}</Title>
        {/*<Title>Product {params?.id}</Title>*/}
      </Header>
    </View>
  );
}

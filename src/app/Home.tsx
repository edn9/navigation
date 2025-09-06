import { View } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";
import { BottomRoutesProps } from "@/routes/BottomRoutes";
import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

//import { useNavigation } from "@react-navigation/native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Home({ navigation }: DrawerRoutesProps<"Home">) {
  //const navigation = useNavigation();
  return (
    <View style={{ flex: 1, padding: 16, paddingTop: 27 }}>
      <Header>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("Product", { id: "123" })}
        />
        <Title>Home</Title>

        <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
      </Header>
    </View>
  );
}

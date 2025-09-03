/*import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type DrawerRouteList = {
  Home: undefined;
  Product: undefined | { id: string }; //dica: não fica passando um monte de propriedade por rota, ideal trabalhar com parametros simples
};

export type DrawerRoutesProps<T extends keyof DrawerRouteList> =
  DrawerScreenProps<DrawerRouteList, T>;

const Drawer = createDrawerNavigator<DrawerRouteList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#2c46b1",
        drawerInactiveTintColor: "#444444",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Product"
        component={Product}
        options={{
          drawerLabel: "Produto",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
*/

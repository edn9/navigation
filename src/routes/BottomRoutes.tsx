import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type BottomRouteList = {
  Home: undefined;
  Product: undefined | { id: string }; //dica: não fica passando um monte de propriedade por rota, ideal trabalhar com parametros simples
};

export type BottomRoutesProps<T extends keyof BottomRouteList> =
  BottomTabScreenProps<BottomRouteList, T>;

const Tab = createBottomTabNavigator<BottomRouteList>();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2c46b1",
        tabBarInactiveTintColor: "#444444",
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

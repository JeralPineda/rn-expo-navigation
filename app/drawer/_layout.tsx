import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneContainerStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          title: "Ususrio",
          drawerLabel: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="person-circle-outline" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          title: "Horario",
          drawerLabel: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="calendar-outline" color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

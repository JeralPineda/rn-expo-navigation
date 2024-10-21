import CustomDrawer from "@/components/shared/custom-drawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneContainerStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Drawer.Screen
        name="tabs"
        options={{
          title: "Tabs + Stack",
          drawerLabel: "Tabs + Stack",
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} name="albums-outline" color={color} />
          ),
        }}
      />

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

import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="user/index"
        options={{ title: "Ususrio", drawerLabel: "Usuario" }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{ title: "Horario", drawerLabel: "Horario" }}
      />
    </Drawer>
  );
}

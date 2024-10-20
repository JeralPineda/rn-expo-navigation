import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
    </Stack>
  );
}

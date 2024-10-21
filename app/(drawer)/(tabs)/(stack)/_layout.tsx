import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";

export default function StackLayout() {
  const navigation = useNavigation();

  const onHeaderLeftPress = (canGoBack: boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop());
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            size={20}
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            className="mr-5"
            color="indigo"
            onPress={() => onHeaderLeftPress(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home" }} />
      <Stack.Screen name="products/index" options={{ title: "Productos" }} />
      <Stack.Screen name="profile/index" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings/index" options={{ title: "Ajustes" }} />
    </Stack>
  );
}

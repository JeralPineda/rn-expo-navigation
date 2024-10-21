import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="text-5xl font-bold mb-2">Perfil</Text>
      <Link href="/drawer/tabs/products">Productos</Link>
      <Link href="/drawer/tabs/home">Home</Link>
      <Link href="/drawer/tabs/settings">Settings</Link>
    </View>
  );
}

import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Settings() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="text-5xl font-bold mb-2">Settings</Text>
      <Link href="/products">Productos</Link>
      <Link href="/home">Home</Link>
      <Link href="/profile">Perfil</Link>
    </View>
  );
}

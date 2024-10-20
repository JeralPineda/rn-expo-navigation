import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Products() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="text-5xl font-bold mb-2">Productos</Text>

      <Link href="/profile">Perfil</Link>
      <Link href="/home">Home</Link>
      <Link href="/settings">Settings</Link>
    </View>
  );
}

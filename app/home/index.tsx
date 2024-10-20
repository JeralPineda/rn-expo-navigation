import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text className="text-5xl font-bold mb-2">Home</Text>
        <Link href="/products">Productos</Link>
        <Link href="/profile">Perfil</Link>
        <Link href="/settings">Settings</Link>
      </View>
    </SafeAreaView>
  );
}

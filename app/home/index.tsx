import { CustomButtom } from "@/components/shared/custom-button";
import { Link, router } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButtom color="primary">Productos</CustomButtom>
        </Link>

        <CustomButtom color="primary" onPress={() => router.push("/products")}>
          Hola mundo
        </CustomButtom>

        {/* <Text className="text-5xl font-bold mb-2">Home</Text> */}
        {/* <Link href="/products">Productos</Link> */}
        {/* <Link href="/profile">Perfil</Link> */}
        {/* <Link href="/settings">Settings</Link> */}
      </View>
    </SafeAreaView>
  );
}

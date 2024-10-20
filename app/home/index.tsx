import { SafeAreaView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { CustomButton } from "@/components/shared/custom-button";

export default function Home() {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButton color="primary">Productos</CustomButton>
        </Link>

        <CustomButton
          variant="text-only"
          onPress={() => router.push("/products")}
        >
          Hola mundo
        </CustomButton>

        {/* <Text className="text-5xl font-bold mb-2">Home</Text> */}
        {/* <Link href="/products">Productos</Link> */}
        {/* <Link href="/profile">Perfil</Link> */}
        {/* <Link href="/settings">Settings</Link> */}
      </View>
    </SafeAreaView>
  );
}

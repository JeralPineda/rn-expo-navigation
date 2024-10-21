import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-10">
      <Text className="font-bold text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-bold mt-2">${product.price}</Text>
    </View>
  );
}

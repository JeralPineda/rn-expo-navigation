import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Productos",
    });
  }, [product]);

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

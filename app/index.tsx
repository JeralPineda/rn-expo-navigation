import { View, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl" style={{ fontFamily: "WorkSans-Black" }}>
          Hello World
        </Text>

        <Text className="text-2xl font-work-black">Hola mundo</Text>
        <Text className="text-xl font-work-light">Hola mundo</Text>
      </View>
    </SafeAreaView>
  );
}

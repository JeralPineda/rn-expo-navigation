import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        // headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="apps-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={22} name="star-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

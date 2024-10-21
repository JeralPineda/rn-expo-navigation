import { SafeAreaView, View } from "react-native";
import { Link, useNavigation } from "expo-router";
import { CustomButton } from "@/components/shared/custom-button";
import { DrawerActions } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButton color="primary" className="mb-2">
            Productos
          </CustomButton>
        </Link>
        <Link href="/profile" asChild>
          <CustomButton color="secondary" className="mb-2">
            Perfil
          </CustomButton>
        </Link>
        <Link href="/settings" asChild>
          <CustomButton color="tertiary" className="mb-2">
            Ajustes
          </CustomButton>
        </Link>
        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-8">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir menú</CustomButton>
      </View>
    </SafeAreaView>
  );
}

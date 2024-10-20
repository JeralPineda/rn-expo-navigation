import { Pressable, PressableProps, Text } from "react-native";

interface CustomButtonProps extends PressableProps {
  children: string;
  color: "primary" | "secondary" | "tertiary";
}

export function CustomButtom({
  children,
  color,
  onPress,
  onLongPress,
}: CustomButtonProps) {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  return (
    <Pressable
      className={`${btnColor} px-3 py-2 active:opacity-90`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
}

import React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string;
}

export const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contained",
      className,
    }: CustomButtonProps,
    ref: React.Ref<View>,
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 {className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center ${textColor} font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 active:opacity-90 ${btnColor} ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center">{children}</Text>
      </Pressable>
    );
  },
);

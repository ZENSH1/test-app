import { View, Text, useColorScheme, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { myImages as Images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  return (
    <Tabs
      screenOptions={({ route }: { route: { name: string } }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 10,
          height: 70,
          borderRadius: 20,
          borderColor: theme.navBackground,
        },

        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarLabelStyle: {
          fontSize: 12,
        },

        tabBarIcon: React.useCallback(({ color, size }:{color:string,size:number}) => {
          const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
            profile: "person-outline",
            create: "add-circle-outline",
            books: "book-outline"
          };
          const iconName = iconMap[route.name as keyof typeof iconMap];
          return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
        }, [route.name]),
      })}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: React.useCallback(({ focused }: { focused: boolean }) => (
            <Image
              source={focused ? Images.logo_light : Images.logo_dark}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ), [])
        }}
      />
      <Tabs.Screen
        name="create"
        options={{ title: "Create", tabBarIconStyle: {} }}
      />
      <Tabs.Screen
        name="books"
        options={{ title: "Books", tabBarIconStyle: {} }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

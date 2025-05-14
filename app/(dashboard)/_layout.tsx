import { View, Text, useColorScheme, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { myImages as Images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  //Trying to make the profile tab be the initiale tab
  // Some how not working.
  // will try again later
  return (
    <Tabs
      initialRouteName="profile"
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
      })}
    >
      
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: React.useCallback(
            ({ focused }: { focused: boolean }) => (
              <Image
                source={focused ? Images.logo_light : Images.logo_dark}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            ),
            []
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: React.useCallback(
            ({ focused }: { focused: boolean }) => (
              <Ionicons
                name="add"
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
            []
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarIcon: React.useCallback(
            ({ focused }: { focused: boolean }) => (
              <Ionicons
                name="book"
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
            []
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'

const DashboardLayout = () => {
  
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  return (
    <Tabs
    screenOptions={{
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
    }}
    >
      <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
      <Tabs.Screen name='create' options={{ title: 'Create' }} />
      <Tabs.Screen name='books' options={{ title: 'Books' }} />
    </Tabs>
  )
}

export default DashboardLayout
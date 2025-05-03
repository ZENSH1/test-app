import { View, Text, useColorScheme, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { myImages as Images } from '@/constants/images'
import { Ionicons } from '@expo/vector-icons'

const DashboardLayout = () => {
  
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  return (
    <Tabs
    screenOptions={({ route }) => ({
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
      
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'profile') {
          return <Ionicons name="person" size={size} color={color} />;
        } else if (route.name === 'create') {
          return <Ionicons name="add" size={size} color={color} />;
        } else if (route.name === 'books') {
          return <Ionicons name="book" size={size} color={color} />;
        }
        return null;
      }
    })}
    >
      <Tabs.Screen name='profile' options={{ title: 'Profile',
         tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? Images.logo_light : Images.logo_dark}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ),
       }} />
      <Tabs.Screen name='create' options={{ title: 'Create', tabBarIconStyle: {
        backgroundImage: Images.logo_light,
      } }} />
      <Tabs.Screen name='books' options={{ title: 'Books', tabBarIconStyle: {
        backgroundImage: Images.logo_dark,
      } }} />
    </Tabs>
  )
}

export default DashboardLayout
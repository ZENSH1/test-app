import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors} from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  return  <>
  <StatusBar style="auto"/>
  <Stack
  screenOptions={
    {
      headerStyle: {
        backgroundColor: theme.navBackground,
      },
      headerTintColor: theme.text,
      headerTitleStyle: {
        fontWeight: "bold",
        color: theme.title,
      },
      contentStyle: {
        backgroundColor: theme.background,
      },
      headerShadowVisible:true
    }
  }>
   
    <Stack.Screen name="index" options={{ title: "Home", headerStyle: { backgroundColor: theme.navBackground } }} />
    <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
  </Stack>
  </>;
}

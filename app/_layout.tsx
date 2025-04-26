import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors} from "../constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  return <Stack
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
    }
  }>
    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    <Stack.Screen name="index" options={{ title: "Home", headerStyle: { backgroundColor: theme.navBackground } }} />
   
  </Stack>;
}

import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors} from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  return (
    <>
    <StatusBar style="auto"/>
    <Stack
        screenOptions={{
           headerShown: false,
            contentStyle: {
              backgroundColor: theme.background,
            },
          
        }}
        />
    </>
  );
}

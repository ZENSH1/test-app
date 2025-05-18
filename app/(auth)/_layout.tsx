import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors} from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import GuestOnly from "@/components/auth/GuestOnly";

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here
  return (
    <GuestOnly>
    <StatusBar style="auto"/>
    <Stack
        screenOptions={{
           headerShown: false,
            contentStyle: {
              backgroundColor: theme.background,
            },
          
        }}
        />
    </GuestOnly>
  );
}

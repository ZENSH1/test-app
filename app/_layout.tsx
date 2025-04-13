import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="About" options={{ title: "About Us" }} />
    <Stack.Screen name="faq" options={{ title: "Frequently Asked Questions" }} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>;
}

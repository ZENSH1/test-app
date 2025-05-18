import useUser from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { Children, useEffect } from "react";

import ThemedView from "../ThemedView";
import ThemedText from "../ThemedText";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import Spacer from "../Spacer";

const UserOnly = ({ children }: { children: React.ReactNode }) => {
  const { user, authCheck } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authCheck && !user) {
      router.replace("/login");
    }
  }, [user, authCheck]);

  return (authCheck && user) ? children : 
    <ThemedView style={[styles.container, styles.centered]} safe={true}>
      <ActivityIndicator size="large" color={Colors.primary} />
      <Spacer height={10} />
      <ThemedText>Getting data, please wait...</ThemedText>
    </ThemedView>
  ; // Return null if authCheck is fals
};

export default UserOnly;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});
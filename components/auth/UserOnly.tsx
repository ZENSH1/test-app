import useUser from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { Children, useEffect } from "react";

import ThemedView from "../ThemedView";
import ThemedText from "../ThemedText";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import Spacer from "../Spacer";
import Loader from "../Loader";

const UserOnly = ({ children }: { children: React.ReactNode }) => {
  const { user, authCheck } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authCheck && !user) {
      router.replace("/login");
    }
  }, [user, authCheck]);

  return (authCheck && user) ? children : 
    <Loader/>
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
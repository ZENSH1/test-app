import useUser from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import ThemedView from "../ThemedView";
import ThemedText from "../ThemedText";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import Spacer from "../Spacer";
import Loader from "../Loader";

interface GuestOnlyProps {
  children: React.ReactNode;
  redirectTo?: string; // Optional redirect path if user is logged in
}

const GuestOnly = ({ children, redirectTo = "/(dashboard)/profile" }: GuestOnlyProps) => {
  const { user, authCheck } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authCheck && user) {
      // If auth check is complete and a user exists, redirect
      router.replace("/profile");
    }
  }, [user, authCheck, router, redirectTo]);

  // Show loading indicator while authCheck is in progress
  if (!authCheck) {
    return (
      <Loader />
    );
  }

  // If auth check is complete and there is no user, show children
  if (authCheck && !user) {
    return children; // Use React Fragment to avoid adding an extra View
  }

  // Otherwise (e.g., during redirection or if logic is somehow bypassed), render nothing or a minimal loader
  return null; 
};

export default GuestOnly;

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
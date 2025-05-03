import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

//Themed Components
import ThemedCard from "@/components/ThemedCard";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import Spacer from "@/components/Spacer";
const login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Login with your credentials</ThemedText>
      <Spacer height={10} />
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
        <Text>Login</Text>
      </Pressable>
      <Spacer height={50} />

      <Link href={"/register"} style={{ padding: 10, borderColor: Colors.primary, borderWidth: 1, borderRadius: 5 }}>
        <ThemedText style={{ textAlign: "center", fontSize: 19 }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    maxWidth: 200,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});

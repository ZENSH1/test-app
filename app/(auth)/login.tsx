import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

//Themed Components
import ThemedCard from "@/components/ThemedCard";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import Spacer from "@/components/Spacer";
import ThemedButton from "@/components/ThemedButton";
import ThemedTextInput from "@/components/ThemedTextInput";
import useUser from "@/hooks/useUser";

const login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {user,login} = useUser();

  const handleSubmit = async () => {
    // Handle login logic here
    if(user){
      console.log("User is already logged in", user.$id);
      return;
    }
    console.log("Login button pressed", email, password, user);
    login(email,password);
  };

  return (
    // Disable keyboard dismiss on press
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        Login
      </ThemedText>
      <Spacer height={10} />

      <ThemedText>Login with your credentials</ThemedText>
      <Spacer height={10} />

      <ThemedTextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <Spacer height={15} />
      <ThemedTextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Spacer height={15} />

      <ThemedButton onPress={handleSubmit}>
        <Text>Login</Text>
      </ThemedButton>

      <Spacer height={50} />

      <Link
        href={"/register"}
        style={{
          padding: 10,
          borderColor: Colors.primary,
          borderWidth: 1,
          borderRadius: 5,
        }}
      >
        <ThemedText style={{ textAlign: "center", fontSize: 19 }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>

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
  input: {
    width: "80%",
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

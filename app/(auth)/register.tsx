import { StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import useUser from "@/hooks/useUser";

// Themed Components
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import Spacer from "@/components/Spacer";
import ThemedButton from "@/components/ThemedButton";
import ThemedTextInput from "@/components/ThemedTextInput";

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const { user, register } = useUser();
  const [error, setError] = React.useState("");

  const router = useRouter();

  const moveToLogin = () => {
    // Dismiss the current screen and navigate to the login screen
    router.dismissTo("/login");
  };

  const handleSubmit = async () => {
    // Handle registration logic here
    console.log("Register button pressed");
    if (password != confirmPassword) {
      // Passwords do not match, handle error
      console.log("Passwords do not match");
      return;
    }

    // Call the register function from useUser
    try {
      await register(email, password);
    } catch (e) {
      console.log("error came");
      setError(e instanceof Error ? e.message : "An error occurred");
      //timout error after 3 seconds
      setTimeout(() => {
        setError("");
      }, 3000);
      return; // Exit the function early to avoid further execution
    }
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Create an account to get started</ThemedText>
      <Spacer height={10} />
      <ThemedTextInput
        placeholder="First Name"
        value={firstName}
        style={styles.input}
        onChangeText={setFirstName}
      />
      <Spacer height={10} />
      <ThemedTextInput
        placeholder="Last Name"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />
      <Spacer height={10} />
      <ThemedTextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <Spacer height={10} />
      <ThemedTextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Spacer height={10} />
      <ThemedTextInput
        placeholder="Confirm Password"
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Spacer height={10} />
      <ThemedButton onPress={handleSubmit}>
        <ThemedText style={{ textAlign: "center" }}>Register</ThemedText>
      </ThemedButton>
      <Spacer height={10} />
      {error && <ThemedText style={styles.error}>{error}</ThemedText>}

      <Spacer height={20} />
      <ThemedButton onPress={moveToLogin}>
        <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default Register;

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
  },
  pressed: {
    opacity: 0.5,
  },
  error:{
    color: Colors.warning,
    padding: 10,
    fontSize: 16,
    marginHorizontal: 20,
    fontWeight: "bold",
    textAlign: "center",
    // add a border around the error text
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 5,
    // add a shadow to the error text
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    }
  }
});

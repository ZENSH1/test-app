import { StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

// Themed Components
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import Spacer from '@/components/Spacer';
import ThemedButton from '@/components/ThemedButton';

const Register = () => {
  const router = useRouter();
  const moveToLogin = () => {
    // Dismiss the current screen and navigate to the login screen
    router.dismissTo('/login');
  };
  const handleSubmit = () => {
    // Handle registration logic here
    console.log('Register button pressed');
  }
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>Register</ThemedText>
      <Spacer height={10} />
      <ThemedText>Create an account to get started</ThemedText>
      <Spacer height={10} />
      <ThemedButton onPress={handleSubmit}>
        <ThemedText style={{ textAlign: 'center' }}>Register</ThemedText>
      </ThemedButton>


      <Spacer height={50} />
      <ThemedButton onPress={moveToLogin}>
        <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
});
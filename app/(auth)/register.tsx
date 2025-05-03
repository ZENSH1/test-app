import { StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

// Themed Components
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import Spacer from '@/components/Spacer';

const Register = () => {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>Register</ThemedText>
      <Spacer height={10} />
      <ThemedText>Create an account to get started</ThemedText>
      <Spacer height={50} />
      <Pressable 
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      onPress={() => router.canGoBack() ? router.back() : router.push('/login')}>
        <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
      </Pressable>
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
import { StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

// Themed Components
import ThemedView from '@/components/ThemedView';
import ThemedText from '@/components/ThemedText';
import Spacer from '@/components/Spacer';

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>Register</ThemedText>
      <Spacer size={10} />
      <ThemedText>Create an account to get started</ThemedText>
      <Spacer size={50} />
      <Link href={'/login'}>
        <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
      </Link>
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
});
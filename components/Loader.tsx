import React from 'react';
import { ActivityIndicator, StyleSheet, ViewStyle,useColorScheme } from 'react-native';
import ThemedView from './ThemedView';
import ThemedText from './ThemedText';
import Spacer from './Spacer';
import { Colors } from '@/constants/Colors'; // Assuming Colors is in constants

interface LoaderProps extends React.PropsWithChildren {
  message?: string;
  size?: 'small' | 'large';
  style?: ViewStyle;
  textStyle?: ViewStyle; // Allow custom styling for the text
}

const Loader: React.FC<LoaderProps> = ({
  message = 'Loading...',
  size = 'large',
  style,
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light']; // Assuming 'light' is the default color scheme

  return (
    <ThemedView style={[styles.container, style || {}]} safe={true}>
      <ActivityIndicator size={size} color={Colors.primary} />
      <Spacer height={10} />
      <ThemedText style={styles.text}>{message}</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add some padding by default
  },
  text: {
    marginTop: 10, // Default margin for the text
    fontSize: 16, // Default font size for the text
  },
});

export default Loader;
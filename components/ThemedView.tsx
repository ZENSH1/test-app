import React from 'react';
import { View, StyleSheet, ViewStyle,useColorScheme } from 'react-native';
import {colors as Colors} from "../constants/colors";

interface ThemedViewProps {
    style?: ViewStyle | ViewStyle[];
}

const ThemedView: React.FC<ThemedViewProps> = ({  style , ...props}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here

    return (
        <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
};


export default ThemedView;
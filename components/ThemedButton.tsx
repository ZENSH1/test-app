import { Colors } from '@/constants/Colors';
import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps, ViewStyle } from 'react-native';

interface ThemedButtonProps extends PressableProps {
    style?: ViewStyle;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ style, ...props }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed,
                style,
            ]}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary
    },
    pressed: {
        opacity: 0.5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ThemedButton;
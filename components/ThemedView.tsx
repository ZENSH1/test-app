import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, ViewStyle,useColorScheme, SafeAreaView } from 'react-native';
import { Colors} from "../constants/Colors";
//import safe area context
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

interface ThemedViewProps extends PropsWithChildren {
    style?: ViewStyle | ViewStyle[];
    safe?: boolean;
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"]; //obviously gotta be safe here

    if(!safe) return (
        <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

    const insets = useSafeAreaInsets();
    console.log(insets); //obviously gotta be safe here to

    return (
        <View style={[style,{     
            backgroundColor: theme.background ,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }]} {...props} />
    )
};


export default ThemedView;
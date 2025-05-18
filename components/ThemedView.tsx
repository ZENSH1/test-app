import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, ViewStyle,useColorScheme, SafeAreaView } from 'react-native';
import { Colors} from "../constants/Colors";


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


    return (
        <View style={[style,{     
            backgroundColor: theme.background ,
        }]} {...props} />
    )
};


export default ThemedView;
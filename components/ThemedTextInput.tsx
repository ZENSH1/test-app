import { TextInput, StyleSheet, useColorScheme, TextInputProps, TextStyle } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

interface ThemedTextInputProps extends TextInputProps {
  style?: TextStyle;
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme || "light"] ?? Colors.light

  return (
    <TextInput 
      style={[
        styles.input, 
        { 
          color: theme.text,
          backgroundColor: theme.uiBackground,  
        }, 
        style
      ]}
      placeholderTextColor={theme.text || theme.text + '80'}
      {...props}
    />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
  }
})
import { Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import { TextStyle } from 'react-native'

interface ThemedTextProps {
  style?: TextStyle;
  title?: boolean;
  [key: string]: any;
}

const ThemedText = ({ style, title = false, ...props }: ThemedTextProps) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme || "light"] ?? Colors.light

  const textColor = title ? theme.title : theme.text

  return (
    <Text 
      style={[{ color: textColor }, style]}
      {...props}
    />
  )
}

export default ThemedText
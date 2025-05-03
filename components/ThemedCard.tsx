import { StyleSheet, useColorScheme, View, ViewProps } from 'react-native'
import { Colors } from '../constants/Colors'

import { ViewStyle } from 'react-native'

interface ThemedCardProps extends ViewProps {
  style?: ViewStyle;
}

const ThemedCard: React.FC<ThemedCardProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme || "light"] ?? Colors.light

  return (
    <View 
      style={[{ backgroundColor: theme.uiBackground}, styles.card, style]}
      {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})
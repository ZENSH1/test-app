import { Image, useColorScheme } from 'react-native'

// images
import logo_dark from '../assets/images/logo_dark.png'
import logo_light from '../assets/images/logo_light.png'

const ThemedLogo = ({...props}) => {
  const colorScheme = useColorScheme()
  
  const logo = colorScheme === 'dark' ? logo_dark : logo_light

  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo
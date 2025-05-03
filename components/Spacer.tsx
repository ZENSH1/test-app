import { View } from 'react-native'


// This is a simple spacer component that can be used to create space between elements in a React Native application.
const Spacer = ({ width = "100%", height = 40 }) => {

  return (
    <View style={{
      width: width === "100%" ? "100%" : Number(width),
      height,
    }} />
  );
}

export default Spacer
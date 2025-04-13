import { StyleSheet, Text, View } from 'react-native'
import {Link} from "expo-router";
const About = () => {
  return (
    <View style={styles.container}>
      <Text>About page</Text>
        <Text>Welcome to the about page!</Text>
        <Text>To get started, edit app/about.tsx</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    text: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
    },
    button: {
      backgroundColor: "#007AFF",
      padding: 10,
      borderRadius: 5,
    },
    homeTitle: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20,
    },
    card: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
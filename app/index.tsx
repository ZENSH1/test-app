import { StyleSheet, Text, View,Image } from "react-native";
import icon from "../assets/images/react-logo.png";
import {Link} from "expo-router";


const Home = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.homeTitle}>Home</Text>

      <View style={styles.card}>
        <Image
          source={icon}
          style={{ width: 100, height: 100, marginBottom: 20 }}
          resizeMode="contain"
        />
        <Text style={styles.text}>This is a simple Expo Router app.</Text>
      <Text style={styles.text}>Welcome to Expo Router!</Text>
      <Text style={styles.text}>To get started, edit app/index.tsx</Text>
      </View>
      <Link href="/About">
        <View style={styles.button}>
          <Text style={{ color: "#fff" }}>Go to About</Text>
        </View>
      </Link>
      <Link href="/faq">
        <View style={styles.button}>
          <Text style={{ color: "#fff" }}>Go to FAQ</Text>
        </View>
      </Link>

    </View>
  );
}

export default Home;

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
    minWidth: 100,
    maxWidth: 200,
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
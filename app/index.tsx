import { StyleSheet, Text, View,Image } from "react-native";
import {Link} from "expo-router";
import { myImages } from "@/constants/images";
import ThemedCard from "@/components/ThemedCard";
import ThemedText from "@/components/ThemedText";
import ThemedLogo from "@/components/ThemedLogo";
import ThemedView from "@/components/ThemedView";
import Spacer from "@/components/Spacer";
import { Colors } from "@/constants/Colors";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedText style={styles.homeTitle}>Home</ThemedText>

      <ThemedCard style={styles.card}>
        <ThemedLogo
          style={{ width: 100, height: 100, marginBottom: 20 }}
          resizeMode="contain"
        />
        <ThemedText style={styles.text}>This is a simple Expo Router app.</ThemedText>
        <ThemedText style={styles.text}>Welcome to Expo Router!</ThemedText>
        <ThemedText style={styles.text}>To get started, edit app/index.tsx</ThemedText>
      </ThemedCard>
      <Spacer height={20} />
      <Link href="/login" style={styles.button}>
        <ThemedText style={styles.button}>
          Go to Login
        </ThemedText>
      </Link>
      <Link href="/books" style={styles.button}>
        <ThemedText style={styles.button}>
          Go to Books
        </ThemedText>
      </Link>
      <Spacer height={30}/>

    </ThemedView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  homeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
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
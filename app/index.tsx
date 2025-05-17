import { StyleSheet, Text, View,Image, ActivityIndicator } from "react-native";
import {Link} from "expo-router";
import { myImages } from "@/constants/images";
import ThemedCard from "@/components/ThemedCard";
import ThemedText from "@/components/ThemedText";
import ThemedLogo from "@/components/ThemedLogo";
import ThemedView from "@/components/ThemedView";
import Spacer from "@/components/Spacer";
import { Colors } from "@/constants/Colors";
import useUser from "@/hooks/useUser";

const Home = () => {
  const { authCheck, user} = useUser();

  if (!authCheck) {
    return (
      <ThemedView style={[styles.container, styles.centered]} safe={true}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Spacer height={10} />
        <ThemedText>Getting data, please wait...</ThemedText>
      </ThemedView>
    );
  }
  return (
    <ThemedView style={styles.container} safe={true}>
      
      <ThemedText style={styles.homeTitle}>Home</ThemedText>

      <ThemedCard style={styles.card}>
        <ThemedLogo
          style={{ width: 100, height: 100, marginBottom: 20 }}
          resizeMode="contain"
        />
        <ThemedText style={styles.text}>This is a simple Expo Router app.</ThemedText>
        <ThemedText style={styles.text}>Welcome to Expo Router!</ThemedText>
        <ThemedText style={styles.text}>
          {user?.email ? `${user.email} is Logged in` : 'You are not logged in'}
        </ThemedText>
      </ThemedCard>
      <Spacer height={20} />
      {(!user) && <Link href="/login" style={styles.button}>
        <ThemedText>
          Go to Login
        </ThemedText>
      </Link>}
      <Spacer height={20} />
      <Link href="/books" style={styles.button}>
        <ThemedText>
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
    marginHorizontal: 15,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
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
  centered: { // Added for centering loading indicator
    justifyContent: 'center',
    alignItems: 'center',
  },
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Faq = () => {
  return (
    <View>
      <Text>FAQ</Text>
      <Text style={styles.text}>This is the FAQ section.</Text>
      <Text style={styles.text}>For more information, please contact us.</Text>
    </View>
  )
}

export default Faq

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
})
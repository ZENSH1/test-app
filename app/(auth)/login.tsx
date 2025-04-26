import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

//Themed Components
import ThemedCard from '@/components/ThemedCard'
import ThemedView from '@/components/ThemedView'
import ThemedText from '@/components/ThemedText'
import Spacer from '@/components/Spacer'
const login = () => {
  return (
    
    <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>Login</ThemedText>
        <Spacer size={10} />
        <ThemedText >Login with your credentials</ThemedText>
        <Spacer size={50} />
        <Link href={'/register'}>
          <ThemedText style={{textAlign: 'center'}}>Register instead</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})
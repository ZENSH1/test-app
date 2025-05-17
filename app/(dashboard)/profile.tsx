import { StyleSheet } from 'react-native'
import React from 'react'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import useUser from '@/hooks/useUser'
import ThemedButton from '@/components/ThemedButton'


const Profile = () => {
  const {user, logout} = useUser()

  return (
    <ThemedView style={styles.container}>

      <ThemedText title={true} style={styles.heading}>
        {user?.email ?? "No Email"}
      </ThemedText>
      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />

      <ThemedButton onPress={logout}>
        <ThemedText>Logout</ThemedText>
      </ThemedButton>

    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})
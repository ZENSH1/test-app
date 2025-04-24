import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const viewNotes = () => {
  return (
    <View>
      <Text>viewNotes</Text>
      <Text>Additional Note Content</Text>
      <Text>More Information</Text>
      <Text>Even More Information</Text>
      <Text>Final Note</Text>
      <Link href="/home">Go to Home</Link>

    </View>
  )
}

export default viewNotes

const styles = StyleSheet.create({})
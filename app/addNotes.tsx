import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const addNotes = () => {
  return (
    <View>
        <Text>Add Notes</Text>
        <Text style={styles.EditText}>Edit Notes</Text>
        <TextInput style={styles.EditInput} placeholder="Enter your notes here" />
        <TouchableOpacity style={styles.EditButton}>
            <Text style={styles.EditButtonText}>Save Notes</Text>
        </TouchableOpacity>
        <View style={styles.EditButtonContainer}>
            <Text style={styles.EditButtonTextContainer}>Go to View Notes</Text>
        </View>
    </View>
  )
}

export default addNotes

const styles = StyleSheet.create({
    EditContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    EditText: {
        fontSize: 20,
        marginBottom: 20,
    },
    EditInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    EditButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    EditButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    EditButtonContainer: {
        marginTop: 20,
    },
    EditButtonTextContainer: {
        fontSize: 16,
        color: '#007BFF',
    },
})
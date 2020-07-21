import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState(``)
    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => setName(newValue)}
                style={styles.input}
                value={name}
            />
            <Text>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: `black`,
        borderWidth: 1,
        margin: 15,
    }
})

export default TextScreen
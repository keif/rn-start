import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
    return (
        <View>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChange={(event) => console.log(event)}
                style={styles.input}
                value="hi there"
            />
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
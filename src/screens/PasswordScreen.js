import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const PasswordScreen = () => {
    const [password, setPassword] = useState(``)
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => setPassword(newValue)}
                style={styles.input}
                value={password}
            />
            {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
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

export default PasswordScreen
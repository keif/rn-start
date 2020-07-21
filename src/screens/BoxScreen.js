import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        borderColor: `red`,
        borderWidth: 10,
        margin: 20,
    },
    viewStyle: {
        borderColor: `black`,
        borderWidth: 3,
    },
})

export default BoxScreen
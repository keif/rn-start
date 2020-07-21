import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textOneStyle: {
        borderColor: `red`,
        borderWidth: 3,
    },
    textTwoStyle: {
        borderColor: `red`,
        borderWidth: 3,
        position: `absolute`,
    },
    textThreeStyle: {
        borderColor: `red`,
        borderWidth: 3,
    },
    viewStyle: {
        alignItems: `flex-end`,
        borderColor: `black`,
        borderWidth: 3,
        height: 200,
    },
})

export default BoxScreen
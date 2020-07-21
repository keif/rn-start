import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        borderColor: `red`,
        borderWidth: 3,
    },
    viewStyle: {
        alignItems: `flex-end`,
        borderColor: `black`,
        borderWidth: 3,
    },
})

export default BoxScreen
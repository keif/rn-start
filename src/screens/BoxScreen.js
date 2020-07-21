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
        borderColor: `black`,
        borderWidth: 3,
        flexDirection: `row`,
        height: 200,
        justifyContent: `flex-start`,
    },
})

export default BoxScreen
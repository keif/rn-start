import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoParent}>
                <View style={styles.viewTwoStyle} />
            </View>
            <View style={styles.viewThreeStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewOneStyle: {
        backgroundColor: `red`,
        height: 50,
        width: 50,
    },
    viewTwoStyle: {
        backgroundColor: `green`,
        height: 50,
        width: 50,
    },
    viewThreeStyle: {
        backgroundColor: `purple`,
        height: 50,
        width: 50,
    },
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTwoParent: {
        height: 100,
        justifyContent: `flex-end`,
    }
})

export default BoxScreen
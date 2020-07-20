import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = `Keith`

    return (
        <View>
            <Text style={styles.header}>ComponentsScreen</Text>
            <Text style={styles.text}>My name is {name}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    text: {
        fontSize: 20
    }
});

export default ComponentsScreen;

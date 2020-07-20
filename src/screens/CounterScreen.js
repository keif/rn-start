import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = (props) => {
    return (
        <View>
            <Text style={styles.header}>Current Count:</Text>
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

export default CounterScreen;

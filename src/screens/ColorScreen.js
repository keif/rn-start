import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorScreen = (props) => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button
                onPress={() => {
                    setCounter(counter + 1);
                }}
                title="Increase"
            />
            <Button
                onPress={() => {
                    setCounter(counter - 1);
                }}
                title="Decrease"
            />
            <Text style={styles.header}>Current Count: {counter}</Text>
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

export default ColorScreen;

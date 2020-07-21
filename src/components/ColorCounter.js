import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                onPress={onIncrease}
                title={`Increase ${color}`}
            />
            <Button
                onPress={onDecrease}
                title={`Decrease ${color}`}
            />
        </View>
    );

};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    text: {
        fontSize: 20
    }
});

export default ColorCounter;

import React, { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import ColorCounter from '../components/ColorCounter';

const SquareScreen = (props) => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View>
            <ColorCounter
                color="Red"
                onDecrease={() => setRed(red - 1)}
                onIncrease={() => setRed(red + 1)}
            />
            <ColorCounter
                color="Green"
                onDecrease={() => setGreen(green - 1)}
                onIncrease={() => setGreen(green + 1)}
            />
            <ColorCounter
                color="Blue"
                onDecrease={() => setBlue(blue - 1)}
                onIncrease={() => setBlue(blue + 1)}
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

export default SquareScreen;

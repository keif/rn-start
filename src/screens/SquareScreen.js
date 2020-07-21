import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10

const SquareScreen = (props) => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    return (
        <View>
            <ColorCounter
                color="Red"
                onDecrease={() => setRed(red - COLOR_INCREMENT)}
                onIncrease={() => setRed(red + COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Green"
                onDecrease={() => setGreen(green - COLOR_INCREMENT)}
                onIncrease={() => setGreen(green + COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Blue"
                onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
                onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
            />
            <View style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, height: 150, width: 150}} />
            <Text>rgb({red}, {green}, {blue})</Text>
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

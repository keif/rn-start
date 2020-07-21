import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15

const SquareScreen = (props) => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        // color === 'red' || 'green' || 'blue'
        // change === +COLOR_INCREMENT || -COLOR_INCREMENT
        switch (color) {
            case `red`:
                (red + change > 255 || red + change < 0) ? null : setRed(red + change)
                return
            case `green`:
                (green + change > 255 || green + change < 0) ? null : setGreen(green + change)
                return
            case `blue`:
                (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change)
                return
            default:
                return
        }
    }

    return (
        <View>
            <ColorCounter
                color="Red"
                onDecrease={() => setColor(`red`, -1 * COLOR_INCREMENT)}
                onIncrease={() => setColor(`red`, COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Green"
                onDecrease={() => setColor(`green`, -1 * COLOR_INCREMENT)}
                onIncrease={() => setColor(`green`, COLOR_INCREMENT)}
            />
            <ColorCounter
                color="Blue"
                onDecrease={() => setColor(`blue`, -1 * COLOR_INCREMENT)}
                onIncrease={() => setColor(`blue`, COLOR_INCREMENT)}
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

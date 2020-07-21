import React, { useReducer } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15
const COLOR_OBJECT = { red: 0, green: 0, blue: 0 }

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number };
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: +COLOR_INCREMENT || -COLOR_INCREMENT }
    switch (action.colorToChange) {
        case `red`:
            return { ...state, red: state.red + action.amount }
        case `green`:
            return { ...state, green: state.green + action.amount }
        case `blue`:
            return { ...state, blue: state.blue + action.amount }
        default:
            return state
    }
}

const SquareScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, COLOR_OBJECT)
    const { red, green, blue } = state

    return (
        <View>
            <ColorCounter
                color="Red"
                onDecrease={() => {dispatch({ colorToChange: `red`, amount: -1 * COLOR_INCREMENT })}}
                onIncrease={() => {dispatch({ colorToChange: `red`, amount: COLOR_INCREMENT })}}
            />
            <ColorCounter
                color="Green"
                onDecrease={() => {dispatch({ colorToChange: `green`, amount: -1 * COLOR_INCREMENT })}}
                onIncrease={() => {dispatch({ colorToChange: `green`, amount: COLOR_INCREMENT })}}
            />
            <ColorCounter
                color="Blue"
                onDecrease={() => {dispatch({ colorToChange: `blue`, amount: -1 * COLOR_INCREMENT })}}
                onIncrease={() => {dispatch({ colorToChange: `blue`, amount: COLOR_INCREMENT })}}
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

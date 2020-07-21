import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const COUNT_INCREMENT = 1
const COUNT_OBJECT = { count: 0 }

const reducer = (state, action) => {
    // state === { count: number };
    // action === { type: 'increase_count' || 'decrease_count', payload: +COUNT_INCREMENT || -COLOR_INCREMENT }
    switch (action.type) {
        case `increment`:
            return { ...state, count: state.count + action.payload }
        case `decrement`:
            return { ...state, count: state.count - action.payload }
        default:
            return state
    }
}

const CounterScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, COUNT_OBJECT)

    return (
        <View>
            <Button
                onPress={() => {
                    dispatch({ type: `increment`, payload: COUNT_INCREMENT});
                }}
                title="Increase"
            />
            <Button
                onPress={() => {
                    dispatch({ type: `decrement`, payload: COUNT_INCREMENT});
                }}
                title="Decrease"
            />
            <Text style={styles.header}>Current Count: {state.count}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
});

export default CounterScreen;

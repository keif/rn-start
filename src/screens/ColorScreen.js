import React, { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";

const ColorScreen = (props) => {
    const [colors, setColors] = useState([])

    return (
        <View>
            <Button
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
                title="Add a Color"
            />
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    return <View style={{ backgroundColor: item, height: 100, width: 100 }} />
                }}
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

export default ColorScreen;

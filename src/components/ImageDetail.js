import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
    const { imageSource, score, title } = props
    return (
        <View>
            <Image source={imageSource} />
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.text}>Image Score - {score}</Text>
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

export default ImageDetail;

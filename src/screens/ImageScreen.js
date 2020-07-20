import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail imageSource={require('../../assets/forest.jpg')} score={9} title="Forest" />
            <ImageDetail imageSource={require('../../assets/beach.jpg')} score={7} title="Beach" />
            <ImageDetail imageSource={require('../../assets/mountain.jpg')} score={10} title="Mountain" />
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

export default ImageScreen;

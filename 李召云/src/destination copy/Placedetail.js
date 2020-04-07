import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";

const { width } = Dimensions.get('window');
const s = width / 640;

export default class Placedetail extends Component {
    render() {
        return (
            <View>
                <Text>地点详情页</Text>
            </View>
        )
    }
}

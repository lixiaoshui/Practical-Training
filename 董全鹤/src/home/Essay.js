import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput, Image,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';

const { width,height } = Dimensions.get('window');
const s = width / 640;

export default class Essay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ``,
            title: props.title
        }
    }

    render() {
        return (
            <View>
                <ImageBackground
                    resizeMode='cover'
                    source={require("../../assets/dqh/search.jpg")}
                    style={styles.tabbar}
                >
                    <TouchableOpacity
                        style={styles.backicon}
                        onPress={() => Actions.pop()}
                    >
                        <Image
                            style={styles.backicon}
                            resizeMode='contain'
                            source={require("../../assets/dqh/homebc.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>故宫的大怪兽</Text>
                </ImageBackground>
                <View style={{ width: width, height: height }}>
                    <WebView source={{ uri: 'https://dqh123456.github.io/pintu/a1.html' }} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabbar: {
        width: width,
        height: 80 * s,
        flexDirection: 'row',
        backgroundColor: '#B0C4DE',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    backicon: {
        width: 45 * s,
        height: 45 * s,
        position: 'absolute',
        left: 10 * s,
        color: '#20B2AA'
    },
    title: {
        fontSize: 21,
        color: 'black'
        // color:'white'
    },
    headtitle: {
        fontSize: 20,
        // marginTop:20*s,
        marginBottom: 20 * s,
    }
})
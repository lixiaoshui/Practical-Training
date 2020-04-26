import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput, Image,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';

const { width,height } = Dimensions.get('window');
const w = width / 640;

export default class ArticleDetail extends Component {
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
                <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%'}}>
                    <View style={styles.head}>
                        <Icon name="chevron-left" onPress={()=>Actions.pop()} style={{marginLeft:"5%"}}/>
                        <Text style={styles.tuisong}>{this.state.title}</Text>
                    </View>
                </ImageBackground>
                <View style={{ width: width, height: height }}>
                    <WebView source={{ uri: 'https://dqh123456.github.io/pintu/' + this.state.title + '.html' }} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
        height:90*w,
        paddingTop:15*w,
        paddingBottom:15*w,
        flexDirection: 'row',
        alignItems:"center",
    },
    tuisong:{
        fontSize:16,
        marginLeft:"30%"
    },
    tabbar: {
        width: width,
        height: 80 * w,
        flexDirection: 'row',
        backgroundColor: '#B0C4DE',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'relative',
    },
    backicon: {
        width: 45 * w,
        height: 45 * w,
        position: 'absolute',
        left: 10 * w,
        color: '#20B2AA'
    },
    headtitle: {
        fontSize: 20,
        marginBottom: 20 * w,
    }
})
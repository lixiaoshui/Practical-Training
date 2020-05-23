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
const w = width / 640;

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
                <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%'}}>
            
                    <View style={styles.head}>
                    <TouchableOpacity
                        style={styles.backicon} 
                        onPress={() => Actions.pop()} >
                        <Image 
                            style={styles.backicon} 
                            resizeMode='contain'
                            source={require("../../assets/lzy/dfanhui.png")} />
                    </TouchableOpacity>
                        <Text style={styles.tuisong}>故宫的大怪兽</Text>
                    </View>
                </ImageBackground>
                <View style={{ width: width, height: height*0.92 }}>
                    <WebView source={{ uri: 'https://dqh123456.github.io/pintu/article/故宫的大怪兽.html' }} />
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
    backicon:{
      width:45*w,
      height:45*w,
      position: 'absolute',
      left: 10 *w,
      color: '#20B2AA'
  },
    tuisong:{
        fontSize:16,
        marginLeft:"39%"
    },
})
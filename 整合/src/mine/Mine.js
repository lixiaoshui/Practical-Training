import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, ImageBackground, Dimensions, ToastAndroid } from 'react-native'
import Button from 'react-native-button';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window')
export default class Mine extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            pag: 1
        }
    }
    render() {
        return (
            <View>
                <View style={styles.tabbar}>
                    <Text style={styles.title}>我的主页</Text>
                </View>
                <ImageBackground style={{ width: '100%', height: height * 0.9, position: 'relative',alignItems:'center' }} source={require('../assets/yjy/y1.jpg')}>
                    <View style={styles.main}>
                        <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 100 }}>小知</Text>
                        <Button style={styles.sto}>我的收藏</Button>
                        <Button style={styles.trends}>我的动态</Button>
                        <Button style={styles.trends}>编辑资料</Button>
                        <Button style={styles.trends}>退出登录</Button>
                    </View>
                    <Image style={styles.tou} source={require('../../assets/yjy/ytx.png')} />
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        position: 'absolute',
        bottom: 0,
        marginLeft: width * 0.025,
        width: width * 0.95,
        // height: height * 0.55,
        height: 550,
        backgroundColor: 'pink',
        opacity: 0.5,
        borderTopLeftRadius:30,
        borderTopRightRadius: 30,
    },
    tou: {
        bottom:480,
        position: 'absolute',
        borderRadius: 70,
        width: 140,
        height: 140,
        borderWidth: 5,
        borderColor: 'white'
    },
    trends:{ 
        fontSize: 30,
         textAlign: 'center',
          marginTop: 15,
          color:'black' 
    },
    sto: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        marginTop: 30
    },
    tabbar: {
        height: height * 0.1,
        width: '100%',
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
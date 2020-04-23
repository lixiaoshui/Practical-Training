import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, ImageBackground, Dimensions,TextInput, AsyncStorage,TouchableOpacity } from 'react-native'
import Button from 'react-native-button';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window')
export default class Editor extends Component {
    constructor() {
        super();
        this.state = {
            name: '小知',
            sex:'女',
            year:80,
            intro:'大家好，我是小知'
        }
    }
    // componentDidMount(){
    //     fetch("/backlogin/backlist")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         this.setState({
    //             data:res.message
    //         })
    //     })
    // }
    render() {
        return (
            <View>
                <ImageBackground style={styles.tabbar} source={require('../assets/yjy/y2.jpg')}>
                    <Button onPress={() => Actions.userPage()}>
                        <Icon color='black' name="left" size={30} style={{ marginLeft: 20 }} />
                    </Button>
                    <Text style={styles.title}>我的资料</Text>
                </ImageBackground>

                <View style={{ alignItems: 'center' ,backgroundColor:'white',height:height*0.9}}>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                            marginBottom:50,
                            marginTop:150
                        }}>
                        <Text style={{fontSize:25,marginBottom:5}}>用户名:</Text>
                    <Text style={{fontSize:25,marginBottom:5,marginLeft:8}}>{this.state.name}</Text>
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                            marginBottom:50
                        }}>
                        <Text style={{fontSize:25,marginBottom:5}}>性别:</Text>
                        <Text style={{fontSize:25,marginBottom:5,marginLeft:8}}>{this.state.sex}</Text>
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                            marginBottom:50
                        }}>
                        <Text style={{fontSize:25,marginBottom:5}}>年龄:</Text>
                        <Text style={{fontSize:25,marginBottom:5,marginLeft:8}}>{this.state.year}</Text>
                    </View>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: 20,
                            marginBottom:50
                        }}>
                        <Text style={{fontSize:25,marginBottom:5}}>个人简介:</Text>
                        <Text style={{fontSize:25,marginBottom:5,marginLeft:8}}>{this.state.intro}</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            width: '80%',
                            height: 60,
                            backgroundColor: 'pink',
                            marginTop: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => Actions.change()}
                    >
                        <Text style={{fontSize:25}}>修改资料</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabbar: {
        height: height * 0.1,
        width: width,
        flexDirection: 'row',
        alignItems: 'center'
    },
    main: {
        position: 'absolute',
        bottom: 0,
        marginLeft: width * 0.025,
        width: width * 0.95,
        // height: height * 0.55,
        height: 550,
        backgroundColor: 'pink',
        opacity: 0.5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    tou: {
        bottom: 480,
        position: 'absolute',
        borderRadius: 70,
        width: 140,
        height: 140,
        borderWidth: 5,
        borderColor: 'white'
    },
    trends: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15,
        color: 'black'
    },
    sto: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        marginTop: 30
    },
    title: {
        marginLeft: 150,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
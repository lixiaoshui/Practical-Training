import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput, Image,
    ScrollView, TouchableOpacity, FlatList,ActivityIndicator,
} from "react-native";
import { Icon } from '@ant-design/react-native';
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

    show = () => {
        this.setState({
            finish: true
        })
    }

    render() {
        return (
            <View>
                <ImageBackground source={require("../../assets/dqh/search.jpg")}
                    resizeMode='cover'  style={styles.tabbar}>
                    <TouchableOpacity
                        style={styles.backicon}
                        onPress={() => Actions.pop()}
                    >
                        <Image
                            style={styles.backicon}
                            resizeMode='contain'
                            source={require("../../assets/lzy/dfanhui.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.state.title}</Text>
                </ImageBackground>
                {
                    this.state.finish ? null : (<View style={styles.load}><ActivityIndicator size='large' color='red' /></View>)
                }
                <View style={{ width: width, height: height*0.92}}>
                    <WebView source={{ uri: 'https://dqh123456.github.io/pintu/article/' + this.state.title + '.html' }} onLoad={this.show}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tabbar: {
        width: width,
        height: 80*w,
        flexDirection: 'row',
        backgroundColor: '#B0C4DE',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flex:1
    },
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
    backicon: {
        width: 45*w,
        height: 45*w,
        position: 'absolute',
        left: 10*w,
        color: '#20B2AA'
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
    },
    load:{
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})



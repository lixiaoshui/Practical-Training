import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,Image,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";
import { myFetch } from '../utils/index';
// import HTML from "react-native-render-html";
// import HTMLView from 'react-native-htmlview'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';



const { width,height } = Dimensions.get('window');
const s = width / 640;


export default class Placedetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ``,
            title:props.title
        }
        console.log(props.title+'323');
    }

    componentDidMount() {
        // myFetch.get('/detail', {
        //     jdtitle: '太和殿'
        // })
        //     .then(res => {
        //         console.log(JSON.stringify(res.data));
        //         this.setState({
        //             data: res.data
        //         })
        //     })
    }

    render() {
        return (
            <View>
                {/* <View style={styles.tabbar}>
                    <Icon 
                        style={styles.backicon} 
                        name="home"
                        onPress={()=>Actions.pop()}
                    />
                    <Text style={styles.title}>{this.state.title}</Text>
                </View> */}
                <ImageBackground
                        resizeMode='cover'
                        source={require("../../assets/lzy/lzy1.jpg")}
                        style={styles.tabbar}
                    >
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

                <View style={{width:width,height:height}}>
                    <WebView source={{ uri: 'https://lizhaoyun.github.io/zhixinghtml/html/'+this.state.title+'.html' }} />
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    tabbar:{
        width:width,
        height:80*s,
        flexDirection:'row',
        backgroundColor:'#B0C4DE',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
    },
    backicon:{
        width:45*s,
        height:45*s,
        position: 'absolute',
        left: 10 * s,
        color: '#20B2AA'
    },
    title:{
        fontSize:21,
        color:'black'
        // color:'white'
    },
    headtitle:{
        fontSize:20,
        // marginTop:20*s,
        marginBottom:20*s,
    }
})

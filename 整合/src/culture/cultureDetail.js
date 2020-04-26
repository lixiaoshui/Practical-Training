import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, ImageBackground,
<<<<<<< HEAD
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";
import { myFetch } from '../utils/index';
import HTML from "react-native-render-html";
import HTMLView from 'react-native-htmlview'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
=======
    Dimensions, TextInput, Image,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";
import { myFetch } from '../utils/index';
// import HTML from "react-native-render-html";
// import HTMLView from 'react-native-htmlview';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';

const { width,height } = Dimensions.get('window');
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
const s = width / 640;
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <span style="color:red">123456</span>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export default class cultureDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ``,
<<<<<<< HEAD
            title:props.title
        }
        console.log(props.title+'323');
=======
            title: props.title
        }
        console.log(props.title + '323');
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
    }

    // componentDidMount() {
    //     myFetch.get('/detail', {
    //         jdtitle: '太和殿'
    //     })
    //         .then(res => {
    //             console.log(JSON.stringify(res.data));
    //             this.setState({
    //                 data: res.data
    //             })
    //         })
    // }

    render() {
        let html = `<p><a href="#">&hearts; nice job!</a></p>`
        console.log(this.props.key+'0000');
        return (
            <View>
<<<<<<< HEAD
                <View style={styles.tabbar}>
                    <Icon 
                        style={styles.backicon} 
                        name="home"
                        onPress={()=>Actions.pop()}
                    />
                    <Text style={styles.title}>{this.state.title}</Text>
                </View>
                <HTMLView value={html}/>
                <Text>130</Text>
                {/* <HTMLView value={this.state.data}/> */}
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />

                {/* <ScrollView style={{ flex: 1 }}>
                </ScrollView> */}
=======
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
                <View style={{ width: width, height: height }}>
                    <WebView source={{ uri: 'https://lizhaoyun.github.io/zhixinghtml/html/' + this.state.title + '.html' }} />
                </View>
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
            </View>
        )
    }
}
<<<<<<< HEAD
const styles=StyleSheet.create({
    tabbar:{
        width:width,
        height:70*s,
        flexDirection:'row',
        backgroundColor:'#B0C4DE',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
    },
    backicon:{
        position:'absolute',
        left:20*s,
        color:'#20B2AA'
    },
    title:{
        fontSize:21,
        color:'white'
    },
    headtitle:{
        fontSize:20,
        // marginTop:20*s,
        marginBottom:20*s,
=======
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
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
    }
})
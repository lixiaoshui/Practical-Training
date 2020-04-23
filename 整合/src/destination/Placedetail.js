import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";
import { myFetch } from '../utils/index';
import HTML from "react-native-render-html";
import HTMLView from 'react-native-htmlview'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';



const { width } = Dimensions.get('window');
const s = width / 640;
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <span style="color:red">123456</span>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;


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
        myFetch.get('/detail', {
            jdtitle: '太和殿'
        })
            .then(res => {
                console.log(JSON.stringify(res.data));
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        let html = `<p><a href="#">&hearts; nice job!</a></p>`
        console.log(this.props.key+'0000');
        return (
            <View>
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
                <HTMLView value={this.state.data}/>
                <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />

                {/* <ScrollView style={{ flex: 1 }}>
                </ScrollView> */}
            </View>
        )
    }
}
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
    }
})

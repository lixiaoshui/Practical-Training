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



const { width } = Dimensions.get('window');
const s = width / 640;
const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <span style="color:red">123456</span>
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;


export default class Placedetail extends Component {

    constructor() {
        super();
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        myFetch.get('/detail', {
            jdtitle: '太和殿'
        })
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data
                })
            })
    }

    render() {
        let html = `<p><a href="#">&hearts; nice job!</a></p>`

        return (
            <View>
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

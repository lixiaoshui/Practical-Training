import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
    topbg: {
        width: '100%',
        height: 62
    },
    top: {
        height: 62,
        width: '100%'

    },
    toptext: {
        height: 62,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    topbutton: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 18,
        right: 40
    },
    topbtntext: {
        fontSize: 22
    }
})

export default class Community extends Component {
    render() {
        return (
            <View>
                {/* 头部 */}
                <ImageBackground source={require('../../assets/lj/ljtopbg.jpg')} style={styles.topbg} >
                    <View style={styles.top} >
                        <View style={styles.toptext}>
                            <Text style={{ fontSize: 24 }} >社区</Text>
                        </View>
                        <TouchableOpacity style={styles.topbutton} onclick={Actions.detail()} >
                            <Text style={styles.topbtntext} >+</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View>
                        {/* body */}
                        <ImageBackground source={require('../../assets/lj/ljbodybg.jpg')} style={{ width: '100%', height: 718 }} >
                            <View style={styles.body} >
                                <View>

                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

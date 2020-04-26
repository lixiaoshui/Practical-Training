import React, { Component } from 'react'
<<<<<<< HEAD
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
=======
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground,Dimensions } from 'react-native'
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';

const { height, width } = Dimensions.get('window')
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
    },
    body: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // height:400,
        // borderWidth:1
    },
    con: {
        width: 420,
        height: 200,
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        borderStyle: 'dashed'
    },
    toux: {
        width: 50,
        height: 50,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderRadius: 25,
        marginLeft: 30,
        marginTop: 20
    },
    adminname: {
        fontSize: 20,
        position: 'absolute',
        top: 22,
        left: 100
    },
    admintime: {
        position: 'absolute',
        top: 50,
        left: 100
    },
    admincon: {
        fontSize: 15,
        paddingLeft: 18,
        paddingTop: 17,
        paddingRight: 13,
        lineHeight: 25
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
                        <TouchableOpacity style={styles.topbutton} onPress={Actions.detail}  >
                            <Text style={styles.topbtntext} >+</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                {/* body */}
<<<<<<< HEAD
                <ImageBackground source={require('../../assets/lj/ljbodybg.jpg')} style={{ width: '100%', height: 718 }} >
=======
                <ImageBackground source={require('../../assets/lj/ljbodybg.jpg')} style={{ width: '100%', height: height-62 }} >
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
                    <ScrollView>
                        <View style={styles.body} >
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang2.jpg')} />
                                    <Text style={styles.adminname} >小知</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                        这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等，这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等
                                        </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang2.jpg')} />
                                    <Text style={styles.adminname} >小知</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                        这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等，这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等
                                        </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang2.jpg')} />
                                    <Text style={styles.adminname} >小知</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                        这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等，这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等
                                        </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang2.jpg')} />
                                    <Text style={styles.adminname} >小知</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                        这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等，这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等
                                        </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang2.jpg')} />
                                    <Text style={styles.adminname} >小知</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                        这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等，这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等
                                        </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang2.jpg')} />
                                    <Text style={styles.adminname} >小知</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                        这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等，这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等
                                        </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

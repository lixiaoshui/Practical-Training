import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    Image
} from 'react-native'
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window')


export default class Minedt extends Component {
    render() {
        return (
            <View>
                {/* 头部 */}
                <ImageBackground source={require('../../assets/dqh/search.jpg')} style={styles.topbg} >
                    <View style={styles.top} >
                        <View style={styles.toptext}>
                            <Text style={{ fontSize: 30 }} >我的动态</Text>
                        </View>
                        <TouchableOpacity style={styles.topbutton}
                        // onclick={Actions.detail()} 
                        >
                            <Text style={styles.topbtntext} >+</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <ImageBackground source={require('../../assets/yjy/ybg.jpg')} style={{ width: '100%', height: height * 0.9 }} >
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

const styles = StyleSheet.create({
    topbg: {
        width: '100%',
        height: height * 0.1
    },
    top: {
        height: height * 0.1,
        width: '100%'

    },
    toptext: {
        height: height * 0.1,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    topbutton: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 22,
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
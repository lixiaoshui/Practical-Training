import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native'
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    topbg: {
        width: '100%',
        height: height*0.1
    },
    top: {
        height: height*0.1,
        width: '100%'

    },
    toptext: {
        height: height*0.1,
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
    }
})

export default class Minedt extends Component {
    render() {
        return (
            <View>
                {/* 头部 */}
                <ImageBackground source={require('../assets/yjy/ytop.jpg')} style={styles.topbg} >
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
                <ScrollView>
                    <ImageBackground source={require('../assets/yjy/ybg.jpg')} style={{ width: '100%', height: height*0.9 }} >
                        <View >
                            <Text>aaa</Text>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        )
    }
}
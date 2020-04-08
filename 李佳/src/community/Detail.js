import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

const styles=StyleSheet.create({
    bg:{

    }
})

export default class Detail extends Component {
    render() {
        return (
            <View>
                <ImageBackground source={require('../../assets/lj/ljdetbg.jpg')} style={{width:'100%',height:918}} >
                    <Text style={styles.bg} >

                    </Text>
                </ImageBackground>
            </View>
        )
    }
}

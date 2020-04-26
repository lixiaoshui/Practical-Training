import React, { Component } from 'react'
<<<<<<< HEAD
import { Text,TextInput, View, StyleSheet, ImageBackground ,Image,Scene ,TouchableOpacity} from 'react-native'
=======
import { Text,TextInput, View, StyleSheet, ImageBackground ,Image,Scene ,TouchableOpacity,Dimensions} from 'react-native'
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

const { height, width } = Dimensions.get('window')
const styles=StyleSheet.create({
    top: {
        height: 62,
        width: '100%',
    },
    back:{
        paddingLeft:15,
        paddingTop:20
    },
    title:{
        fontSize:24,
        position:'absolute',
        top:20,
        left:185
    },
    topbutton: {
        borderRadius: 15,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 25,
        right: 40
    },
    content:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    per:{
        width:404,
        height:670,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:18,
        marginTop:12
    },
    person:{
        justifyContent:'center',
        height:70,
        borderBottomWidth:1,
        borderColor:'grey'
    },
    admin:{
        position:"absolute",
        top:20,
        left:90,
        fontSize:20
    }
})

export default class Detail extends Component {
    render() {
        return (
            <View>
<<<<<<< HEAD
                <ImageBackground source={require('../../assets/lj/ljdetbg.jpg')} style={{width:'100%',height:918}} >
=======
                <ImageBackground source={require('../../assets/lj/ljdetbg.jpg')} style={{width:'100%',height:'100%'}} >
>>>>>>> aff1f059d439ebc0b59aecb5fd735601f9f8ed89
                    <View style={styles.top} >
                        <View>
                            <Icon name='left' onPress={Actions.pop} style={styles.back} />
                            <Text style={styles.title} >发表动态</Text>
                        </View>
                        <TouchableOpacity style={styles.topbutton}   >
                            <Text style={styles.topbtntext} style={{fontSize:16}} onPress={Actions.community} >发表</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content} >
                        <View style={styles.per} >
                            <View style={styles.person} >
                                <Image style={{width:50,height:50,borderRadius:25,marginLeft:20}} source={require('../../assets/yjy/ytx.png')} />
                                <Text style={styles.admin} >小知</Text>
                            </View>
                            <TextInput placeholder='分享新鲜事...' style={{ height: 60 }} >

                            </TextInput>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

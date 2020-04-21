import React, { Component } from 'react'
import { Text,TextInput, View, StyleSheet, ImageBackground ,Image,Scene ,TouchableOpacity} from 'react-native'
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

const styles=StyleSheet.create({
    top: {
        height: 62,
        width: '100%',
        justifyContent: 'center',
    },
    topbutton: {
        borderRadius: 15,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 18,
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
                <ImageBackground source={require('../../assets/lj/ljdetbg.jpg')} style={{width:'100%',height:918}} >
                    <View style={styles.top} >
                        <Text style={{fontSize:24,alignItems:'center'}} >
                            <Icon name='left' onPress={Actions.pop} />
                            <Text  >发表动态</Text>
                        </Text>
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

import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'

const styles=StyleSheet.create({
    top:{
        width:'100%',
        height:62,
        justifyContent:'center'
    },
    back:{
        paddingLeft:15,
        paddingTop:10
    },
    title:{
        fontSize:24,
        position:'absolute',
        top:20,
        left:215
    },
    toux:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        borderStyle:'dotted',
        marginLeft:60,
        marginTop:30
    },
    adminname:{
        fontSize:20,
        position:'absolute',
        top:28,
        left:140
    },
    admintime:{
        position:'absolute',
        top:60,
        left:140
    },
    admincon: {
        fontSize: 15,
        paddingLeft: 35,
        paddingTop: 17,
        paddingRight: 35,
        lineHeight: 30
    }
})

export default class Dtcontent extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
        this.setState({
            data:this.props.lacation.state
        },()=>{
            console.log(this.state.data);
        })
    }
    render() {
        return (
            <View>
                <ImageBackground source={require('../../assets/lj/ljdetbg.jpg')} style={{width:'100%',height:918}} >
                    <View style={styles.top} >
                        <Icon name='left' style={styles.back} onPress={Actions.pop} />
                        <Text style={styles.title} >详情</Text>
                    </View>
                    <View>
                        {/* <Image source={require('../../assets/lj/ljtouxiang2.jpg')} style={styles.toux} /> */}
                        <Image source={this.state.data['imgpath']} style={styles.toux} />
                        <Text style={styles.adminname} > {this.state.data['username']} </Text>
                        <Text style={styles.admintime} > {this.state.data['createtime']} </Text>
                        <Text style={styles.admincon} >
                            {this.state.data['content']}
                            {/* 这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等，这次衡山行，最有感觉的几处地方，麻姑仙境、石浪、祝孔庙于等 */}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

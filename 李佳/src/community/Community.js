import React, { Component } from 'react'
import { DeviceEventEmitter,Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';

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
        height:"90%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60
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
    constructor(){
        super();
        this.state={
            data:[],
            username:'admin'
            // data:am
        }
    }
    componentDidMount(){
        // fetch('http://192.168.0.104:3001/dt/list')
        fetch('http://192.168.0.104:3001/dt/list')
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                data:res.message
            },()=>{
                console.log(this.state.data)
            })
        })
        DeviceEventEmitter.addListener("returnContent", (params) => {
            var con =JSON.parse(params);
            console.log(con.username+":"+con.content + "获取发表内容00000000");
            // var lista=[con,...this.state.data];
            // console.log(lista);
            this.setState((state)=>{
                return {
                    data:[con,...state.data]
                }
            },()=>{
                console.log("ok"+this.state.data);
            })
            // console.log()
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.data==this.state.data){
            console.log(prevState.data==this.state.data)
            fetch('http://192.168.0.104:3001/dt/list')
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    data:res.message
                },()=>{
                    console.log(this.state.data);
                    console.log(typeof(this.state.data[0].createtime));
                })
            })
        }
    }
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
                <ImageBackground source={require('../../assets/lj/ljbodybg.jpg')} style={{ width: '100%', height: 718 }} >
                    <ScrollView >
                        <View style={styles.body} >
                            {
                                this.state.data.map((item,idx)=>{
                                    return <TouchableOpacity onPress={()=>Actions.dtcontent({picpath:item.picpath,username:item.username,content:item.content,createtime:item.createtime})} >
                                        <View style={styles.con} >
                                            <Image style={styles.toux} source={{uri:item.picpath}} />
                                            <Text style={styles.adminname} > {item.username} </Text>
                                            <Text style={styles.admintime} > {item.createtime} </Text>
                                            <Text style={styles.admincon} > {item.content} </Text>
                                        </View>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

import React, { Component } from 'react'
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
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
    // constructor(){
    //     super();
    //     this.state={
    //         data:[]
    //     }
    // }
    // componentDidMount(){
    //     fetch('/dt/list')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         this.setState({
    //             data:res.message
    //         },()=>{
    //             console.log(this.state.data)
    //         })
    //     })
    // }
    // componentDidUpdate(prevProps,prevState){
    //     if(prevState.data==this.state.data){
    //         console.log(prevState.data==this.state.data)
    //         fetch('/dt/list')
    //         .then(res=>res.json())
    //         .then(res=>{
    //             console.log(res);
    //             this.setState({
    //                 data:res.message
    //             },()=>{
    //                 console.log(this.state.data);
    //                 console.log(typeof(this.state.data[0].createtime));
    //             })
    //         })
    //     }
    // }
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
                    <ScrollView>
                        <View style={styles.body} >
                            {/* {
                                this.state.data.map((item,idx)=>{
                                    return <TouchableOpacity onPress={Actions.dtcontent} >
                                        <View style={styles.con} >
                                            <Image style={styles.toux} source={item.imgpath} />
                                            <Text style={styles.adminname} > {item.username} </Text>
                                            <Text style={styles.admintime} > {item.createtime} </Text>
                                            <Text style={styles.admincon} > {item.content} </Text>
                                        </View>
                                    </TouchableOpacity>
                                })
                            } */}



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
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang3.jpg')} />
                                    <Text style={styles.adminname} >小行</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                    有时我们选择改变，并非经过深思熟虑，而更像是听见了天地间冥冥中的呼唤，呼唤你前往另一个地方，过上另一种生活。
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang1.jpeg')} />
                                    <Text style={styles.adminname} >知行</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                    人生就像是一场旅行，遇到的既有感人的，也有伤心的，既有令人兴奋的，也有令人灰心的，既有美妙的风景，也会有称不上景只有风的地方。
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang2.jpg')} />
                                    <Text style={styles.adminname} >小知</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                    有时间，我们可以去爬山，去看日出，去散步，去欣赏大自然，去陌生的街角，去做一切我们曾经或现在也很想做的事情，可以有一个人陪着你，也可以你一个人。
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang1.jpeg')} />
                                    <Text style={styles.adminname} >知行</Text>
                                    <Text style={styles.admintime} >2020.02.10</Text>
                                    <Text style={styles.admincon} >
                                    失去的我们不妨让其失去，因为它可让我们少些惆怅;得到的我们不妨少些满足，因为它可让我们多些清醒。
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={Actions.dtcontent} >
                                <View style={styles.con}  >
                                    <Image style={styles.toux} source={require('../../assets/lj/ljtouxiang3.jpg')} />
                                    <Text style={styles.adminname} >小行</Text>
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

import React, { Component, useEffect, useState } from 'react';
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList, AsyncStorage,
    DeviceEventEmitter,
} from "react-native";
import { Icon, List, Picker, Provider } from '@ant-design/react-native';
import { Actions } from "react-native-router-flux";



const { width } = Dimensions.get('window');
const s = width / 640;

const wd=250*s;
const ht=150*s;

const cultureItem = [
    {
        title: '那达慕',
        picpath: require('../../assets/lzy/dtaofu4.jpg')
    },
    {
        title: '汉服',
        picpath: require('../../assets/lzy/dhanfu.png')
    }, {
        title: '福字',
        picpath: require('../../assets/lzy/dfuzi.png')
    },
];
const data = [
    {
        "label": "北京市",
        "value": "11",
        "children": [
            {
                "label": "市辖区",
                "value": "1101",
            },
            {
                "label": "郊区",
                "value": "1102",
            }
        ]
    },
    {
        "value": '12',
        "label": '陕西省',
        "children": [
            {
                "label": "西安市",
                "value": "1201",
            },
            {
                "label": "长安区",
                "value": "1202",
            }
        ]
    }
];

const bj = [
    { title: '故宫', english: 'Forbidden City', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '天坛', english: 'Temple of Heaven', picpath: require('../../assets/lzy/dtiantan.png') },
    { title: '天安门', english: 'Tiananmen Square', picpath: require('../../assets/lzy/dtiananmen.png') },
    { title: '八达岭长城', english: 'Badaling Great Wall', picpath: require('../../assets/lzy/lzybadaling.jpg') },
    { title: '颐和园', english: 'Summer Palace', picpath: require('../../assets/lzy/dyiheyuan.png') },
    { title: '圆明园', english: 'Old Summer Palace', picpath: require('../../assets/lzy/lzyyuanmingyuan.jpg') },
    { title: '什刹海', english: 'Shichahai', picpath: require('../../assets/lzy/lzyshichahai.jpg') },
    { title: '南锣鼓巷', english: 'Nanluoguxiang', picpath: require('../../assets/lzy/lzynanluoguxiang.jpg') },
]

const xa = [
    { title: '南泥湾', english: 'Nanniwan', picpath: require('../../assets/lzy/lzynanniwan.jpg') },
    { title: '秦始皇陵', english: 'Qin Shi Huang Mausoleum', picpath: require('../../assets/lzy/lzyqinshihuangling.jpg') },
    { title: '华清宫', english: 'Huaqing Palace', picpath: require('../../assets/lzy/lzyhuaqinggong.jpg') },
    { title: '大雁塔', english: 'Da-Yan Tower', picpath: require('../../assets/lzy/lzydayanta.jpg') },    
    { title: '法门寺', english: 'Famen Temple', picpath: require('../../assets/lzy/lzyfamensi.jpg') },
    { title: '大唐芙蓉园', english: 'Datang Furong Garden', picpath: require('../../assets/lzy/lzydatangfurongyuan.jpg') },
]




export default class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: bj,
            value: [],
            name: '',
            city: '北京',
        };
        console.log(props);
    }

    componentDidMount() {
        console.log("11111111");
        DeviceEventEmitter.addListener("returnData", (params) => {
            console.log(params + "fanhui00000000");
            switch (params) {
                case '西安': this.setState({
                                city: params,
                                data:xa
                            })
                            break;
                case '北京':this.setState({
                                city:params,
                                data:bj,
                            });
                            break;
                default:this.setState({
                            city:params,
                        });
            }
            // this.setState({
            //     city: params
            // }
        })
    }



    render() {
        return (
            <ImageBackground
                source={require('../../assets/lzy/lbg19.jpg')}
                style={styles.showbody}
            >
                <ImageBackground
                    style={{
                        width: width,
                        height: 80 * s,
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}
                    resizeMode="cover"
                    // source={require('../../assets/lzy/albg5.jpg')}
                    source={require("../../assets/lzy/lzy1.jpg")}
                >
                    <View style={styles.searchbar}>
                        <TouchableOpacity
                            onPress={() => Actions.showresult()}
                        >
                            <TextInput
                                style={styles.search}
                                placeholderTextColor="gray"
                                placeholder="请输入关键词"
                                onPress={() => Actions.showresult()}
                            />
                            <Icon name='search' size="md" style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
                <ScrollView>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <View style={{
                            height: 350 * s,
                            width: width,
                        }}>
                            <View style={styles.titlebar}>
                                <Text style={styles.name}>风俗文化</Text>
                                <TouchableOpacity
                                    onPress={() => Actions.cultureList()}
                                >
                                    <Text style={{
                                        marginLeft: 390 * s,
                                        fontSize: 15,
                                        color: 'purple'
                                    }}>查看更多 >></Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.culshow}>
                                {
                                    cultureItem.map((item) => (
                                        <TouchableOpacity
                                            style={{
                                                width: 180 * s,
                                                height: 230 * s,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                            onPress={() => Actions.cultureDetail({ title: item.title })}
                                        >
                                            <ImageBackground
                                                style={[styles.culturebg, styles.culturebgp]}
                                                resizeMode="cover"
                                                source={item.picpath}
                                            ></ImageBackground>
                                            <View style={[styles.culturebg, styles.coverbox]}></View>
                                            <Text style={styles.culturename}>{item.title}</Text>
                                        </TouchableOpacity>

                                    ))
                                }
                            </View>

                        </View>

                        <TouchableOpacity
                            style={{
                                width: width * 0.95,
                                margin: "auto",
                                height: 60 * s,
                                backgroundColor: "#f8f7f7",
                                borderColor: "gray",
                                // borderWidth:1*s,
                                borderTopWidth: 1 * s,
                                borderBottomWidth: 1 * s,
                                flexDirection: 'row',
                                // paddingLeft:18*s,
                                alignItems: 'center'
                                // justifyContent:'space-around'
                            }}
                            onPress={() => Actions.cityselect({ refresh: (qq) => { this.change() } })}
                        >
                            <Text style={{ fontSize: 20 }}>切换城市</Text>

                            <Text style={{ fontSize: 18, marginLeft: width * 0.65 }}>{this.state.city}</Text>
                        </TouchableOpacity>
                        <View style={{
                            width: width,
                            // backgroundColor: 'pink',
                            marginTop: 30 * s
                        }}>
                            <View style={styles.titlebar}>
                                <Text style={styles.name}>{this.state.city}</Text>
                            </View>
                            <FlatList
                                numColumns={2}
                                data={this.state.data}
                                style={{
                                    padding: 16 * s
                                }}
                                renderItem={({ item, idx }) => (
                                    <TouchableOpacity
                                        key={idx}
                                        style={styles.placelist}
                                        onPress={() => { Actions.placelist({ title: item.title }) }}
                                    >
                                        <ImageBackground
                                            style={[styles.citybg, styles.citybgp]}
                                            resizeMode="cover"
                                            source={item.picpath}
                                        />
                                        <View style={[styles.coverbox, styles.citybg]}></View>
                                        <View style={styles.cityname}>
                                            <Text style={styles.nametxt}>{item.title}</Text>
                                            <Text style={styles.nametxt}>{item.english}</Text>
                                        </View>

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    showbody: {
        flex: 1,
    },
    searchbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25 * s,
    },
    search: {
        width: 460 * s,
        height: 50 * s,
        paddingLeft: 30 * s,
        borderWidth: 2 * s,
        borderColor: "#999999",
        borderRadius: 25 * s,
    },
    icon: {
        position: "absolute",
        top: 8 * s,
        right: 30 * s
    },
    // 风俗文化
    titlebar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20 * s
    },
    name: {
        fontSize: 22,
    },
    culshow: {
        width: width,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 25 * s,
    },
    culturebg: {
        width: 180 * s,
        height: 230 * s,
    },
    culturebgp: {
        position: "relative"
    },
    culturename: {
        fontSize: 20,
        position: "absolute",
        top: 100 * s,
        left: 60 * s
    },
    // 景点
    placelist: {
        margin: 30 * s,
    },
    citybg: {
        // width: 250 * s,
        // height: 150 * s,
        width: wd,
        height: ht,
    },
    citybgp: {
        position: 'relative'
    },
    coverbox: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#a3a3a3',
        opacity: 0.5
    },
    cityname: {
        width:wd*0.7,
        // backgroundColor:'red',
        position: 'absolute',
        top: wd*0.15,
        left: ht*0.2,
    },
    nametxt: {
        fontSize: 17,
        textAlign:'center',
        color: '#fff'
    }
})
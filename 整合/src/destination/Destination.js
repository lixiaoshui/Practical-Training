import React, { Component } from 'react';
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList,
} from "react-native";
import { Icon, List, Picker, Provider } from '@ant-design/react-native';
import { Actions } from "react-native-router-flux";



const { width } = Dimensions.get('window');
const s = width / 640;

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
    { title: '故宫', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '天坛', english: 'palace museum', picpath: require('../../assets/lzy/dtiantan.png') },
    { title: '天安门', english: 'palace museum', picpath: require('../../assets/lzy/dtiananmen.png') },
    { title: '颐和园', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '圆明园', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '什刹海', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '南锣鼓巷', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '故宫', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
]

export default class Destination extends Component {
    constructor(props) {
        super(props);
        // this.onPress = () => {
        //    console.log(this.state.value);
        //   };
        this.onChange = value => {
            this.setState({ value });
        };
        this.state = {
            data: [],
            value: [],
            name: ''
            // pickerValue: [],
        };
    }

    componentDidMount(){
        console.log("11111111");
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
                        justifyContent: 'center'
                    }}
                    resizeMode="cover"
                    source={require('../../assets/lzy/albg5.jpg')}
                >
                    <View style={styles.searchbar}>
                        <TextInput
                            style={styles.search}
                            placeholderTextColor="gray"
                            placeholder="请输入关键词"
                        />
                        <Icon name='search' size="md" style={styles.icon} />
                    </View>

                </ImageBackground>
                <ScrollView>

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
                                        onPress={() => Actions.cultureDetail({title:item.title})}
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
                    <Provider>
                        <View>
                            <List>
                                <Picker
                                    data={data}
                                    cols={1}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                >
                                    <List.Item arrow="horizontal" onPress={this.onPress}>
                                        切换城市
                            </List.Item>
                                </Picker>


                            </List>
                        </View>
                    </Provider>
                    <View style={{
                        width: width,
                        // backgroundColor: 'pink',
                        marginTop: 30 * s
                    }}>
                        <View style={styles.titlebar}>
                            <Text style={styles.name}>城市</Text>
                        </View>
                        <FlatList
                            numColumns={2}
                            data={bj}
                            style={{
                                padding: 16 * s
                            }}
                            renderItem={({ item, idx }) => (
                                <TouchableOpacity
                                    key={idx}
                                    style={styles.placelist}
                                    onPress={()=>{Actions.placelist({title:item.title})}}
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
        alignItems: 'center'
    },
    search: {
        width: 450 * s,
        height: 50 * s,
        paddingLeft: 30 * s,
        borderWidth: 2 * s,
        borderColor: "#999999",
        borderRadius: 25 * s,
    },
    icon: {
        position: "absolute",
        top: 8 * s,
        right: 110 * s
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
        width: 250 * s,
        height: 150 * s,
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
        position: 'absolute',
        top: 43 * s,
        left: 40 * s,
        alignItems: 'center',
    },
    nametxt: {
        fontSize: 17,
        color:'#fff'
    }
})

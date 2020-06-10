import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList, Image
} from "react-native";
// import { Icon, List, Picker, Provider } from '@ant-design/react-native';
import { Actions } from "react-native-router-flux";
import { WebView } from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
// var Geolocation = require('Geolocation');
const { width } = Dimensions.get('window');
const s = width / 640;

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
]

const bj = [

    // { title: '故宫', english: 'palace museum', picpath: '../../assets/lzy/dgugong'},
    // { title: '天坛', english: 'palace museum', picpath: '../../assets/lzy/dtiantan'},
    // { title: '天安门', english: 'palace museum', picpath: '../../assets/lzy/dtiananmen'},
    // { title: '颐和园', english: 'palace museum', picpath:'../../assets/lzy/dgugong'},
    { title: '圆明园', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '什刹海', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '南锣鼓巷', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
    { title: '故宫', english: 'palace museum', picpath: require('../../assets/lzy/dgugong.png') },
]

export default class tryselect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: [],
            name: '',
            longitude:'',
            latitude:'',
            city:'',
            district:'',
            street:'',
            position:'',
            // pickerValue: [],
        };
    }

    componentDidMount() {

        // Geolocation.getCurrentPosition(info=>{
        //     console.log(info);
        // });
        // Geolocation.getCurrentPosition(val => {
        //     let ValInfo = "速度：" + val.coords.speed +
        //         "\n经度：" + val.coords.longitude +
        //         "\n纬度：" + val.coords.latitude +
        //         "\n准确度：" + val.coords.accuracy +
        //         "\n行进方向：" + val.coords.heading +
        //         "\n海拔：" + val.coords.altitude +
        //         "\n海拔准确度：" + val.coords.altitudeAccuracy +
        //         "\n时间戳：" + val.timestamp;
        //     // this.setState({ LocalPosition: ValInfo });
        //     console.log(ValInfo);
        // }, val => {
        //     letValInfo = '获取坐标失败：' + val;
        //     // this.setState({ LocalPosition: ValInfo });
        //     console.log(ValInfo);
        // });
    }

    getlocation=()=>{
        Geolocation.getCurrentPosition(
            location => {
                this.setState({
                    longitude: location.coords.longitude,//经度
                    latitude: location.coords.latitude,//纬度
                });
                // var a =
                console.log(location.coords.longitude,location.coords.longitude.toFixed(6),location.coords.latitude,location.coords.latitude.toFixed(6))
                // fetch(`https://restapi.amap.com/v3/assistant/coordinate/convert?locations=${location.coords.longitude.toFixed(6)},${location.coords.latitude.toFixed(5)}coordsys=gps&output=JSON&key=8a3900d8d7ff67e37d73f8ee765ec6c1`)
                // .then(res=>res.json())
                // .then(res=>{
                //     console.log('转化'+res);
                //     console.log(res.status,res.info,res.locations);
                //     this.setState({
                //         longitude: location.coords.longitude,//经度
                //         latitude: location.coords.latitude,//纬度
                //     });
                // })
                //通过调用高德地图逆地理接口，传入经纬度获取位置信息
                // fetch(`http://restapi.amap.com/v3/geocode/regeo?key=97c933e33025b3843b40016900074704&location=${this.state.longitude},${this.state.latitude}&radius=1000&extensions=all&batch=false&roadlevel=0`, {
                fetch(`http://restapi.amap.com/v3/geocode/regeo?key=8a3900d8d7ff67e37d73f8ee765ec6c1&location=${this.state.longitude},${this.state.latitude}&radius=1000&extensions=all&batch=false&roadlevel=0`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: ``
                })
                    .then((response) => response.json())
                    .then((jsonData) => {
                        console.log(jsonData)
                       
                             try {
                            this.setState({
                                city: jsonData.regeocode.addressComponent.city,
                                district: jsonData.regeocode.addressComponent.district,
                                street: jsonData.regeocode.addressComponent.township,
                                position: jsonData.regeocode.formatted_address,
                            },()=>{
                                console.log(this.state.city,this.state.position);
                            });
                        } catch (e) {

                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={this.getlocation}

                >
                    <Text>获取定位</Text>
                </TouchableOpacity>
                <Text>{this.state.city}</Text>
                <FlatList
                    numColumns={2}
                    data={bj}
                    style={{
                        padding: 16 * s
                    }}
                    renderItem={({ item, idx }) => {
                        // var imp=require(item.picpath+'.png');
                        return <TouchableOpacity
                            key={idx}
                            style={styles.placelist}
                            onPress={() => { Actions.placelist({ title: item.title }) }}
                        >
                            <ImageBackground
                                style={[styles.citybg, styles.citybgp]}
                                resizeMode="cover"
                                source={item.picpath}
                            // source={imp}
                            />
                            <View style={[styles.coverbox, styles.citybg]}></View>
                            <View style={styles.cityname}>
                                <Text style={styles.nametxt}>{item.title}</Text>
                                <Text style={styles.nametxt}>{item.english}</Text>
                            </View>

                        </TouchableOpacity>

                    }
                    }
                />
                <Image style={{width:100,height:50}} source={{uri:'https://s1.ax1x.com/2020/05/29/tu8qAg.jpg'}}/>
            </View>
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
        color: '#fff'
    }
})
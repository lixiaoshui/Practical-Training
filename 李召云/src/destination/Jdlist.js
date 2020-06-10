import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList, Image,
    AsyncStorage,ActivityIndicator,
} from "react-native";
import { myFetch } from '../utils/index';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

const { width,height } = Dimensions.get('window');
const s = width / 640;

var list = [
    {
        name: '太和殿',
        picpath: require("../../assets/lzy/dtaihe.png"),
        introduce: '太和殿，俗称“金銮殿”，是明清古代宫殿建筑，为中国古代宫殿建筑之精华，是中国现存最大的木结构大殿之一，位于北京紫禁城南北主轴线的显要位置。',
        dislike: false
    },
    {
        name: '中和殿',
        picpath: require("../../assets/lzy/dnanniwan.png"),
        introduce: '中和殿，是北京故宫外朝三大殿之一，属于明清传统宫殿建筑。是皇帝去太和殿大典之前休息的地方，并接受执事官员的朝拜的地方',
        dislike: false
    },
    {
        name: '保和殿',
        picpath: require("../../assets/lzy/dkunning.png"),
        introduce: '保和殿为北京故宫外朝三大殿之一，位于中和殿后，建成于明永乐十八年，初名谨身殿，嘉靖时遭火灾，重修后改称建极殿。',
        dislike: false

    },
    {
        name: '养心殿',
        picpath: require("../../assets/lzy/dshihuang.png"),
        introduce: '养心殿是始建于明代嘉靖年间，位于内廷乾清宫西侧。清代有八位皇帝先后居住在养心殿。',
        dislike: false
    }
]
// var glist;
// AsyncStorage.setItem('list', JSON.stringify(list),
//     () => { console.log('ok') }
// )
// AsyncStorage.getItem('list')
//     .then(res => {
//         glist = JSON.parse(res);
//     })
export default class Jdlist extends Component {
    constructor(props) {
        super(props);
        // AsyncStorage.getItem('list')
        // .then(res=>{

        // })
        this.state = {
            // jdlist: glist,
            loading:true,
            jdlist:[],
            name: props.title,
            city: props.city,
            username: 'admin',
            // username:'aaa'
        }
        console.log(props.title + '333');
    }
    componentDidMount() {

        fetch(`http://192.168.43.1:3001/like/get?username=${this.state.username}`)
            .then(res => res.json())
            .then(res => {
                console.log('7777777');
                console.log(res.message);
                var likelist = res.message;
                fetch(`http://192.168.43.1:3001/jdlist?city=${this.state.city}&title=${this.state.name}`)
                    .then(res => res.json())
                    .then(res => {
                        console.log('0000000');
                        console.log(res.message);
                        var receivelist = res.message;
                        for (var i = 0; i < receivelist.length; i++) {
                            for (var j = 0; j < likelist.length; j++) {
                                if (receivelist[i].placename === likelist[j]) {
                                    console.log(receivelist[i].placename, receivelist[i].likeflag)
                                    receivelist[i].likeflag = 'like';
                                }
                            }
                        }
                        this.setState({
                            // jdlist: res.message
                            jdlist: receivelist,
                            loading:false
                        }, () => {
                            console.log('ppppppp')
                            
                        })
                    })
            })


    }
    addlike = (name) => {

        console.log(name);
        var tem = this.state.jdlist;
        for (var i = 0; i < tem.length; i++) {
            // console.log(getlist[i].name,getlist[i].dislike);
            if (tem[i].placename === name) {
                if (tem[i].likeflag === 'like') {
                    tem[i].likeflag = 'dislike';
                    var obj={
                        username:this.state.username,
                        filetitle:name
                    }
                    fetch(`http://192.168.43.1:3001/like/del`, {
                        method: 'POST',
                        headers: {
                            "Accept": 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(obj)
                    })
                        .then(res => res.json())
                        .then(res => {
                            console.log('addlike 0000000');
                            console.log(res.message);
                            
                        })
                }
                else {
                    tem[i].likeflag = 'like';
                    var obj={
                        username:this.state.username,
                        filetitle:name
                    }
                    fetch(`http://192.168.43.1:3001/like/add`, {
                        method: 'POST',
                        headers: {
                            "Accept": 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(obj)
                    })
                        .then(res => res.json())
                        .then(res => {
                            console.log('addlike 0000000');
                            console.log(res.message);
                            
                        })
                }
                // console.log("llladsafdsf");
            }
        }
        this.setState({
            jdlist: tem
        })
        // AsyncStorage.getItem('list')
        //     .then((res) => {
        //         // console.log(res);
        //         if (res) {
        //             var getlist = JSON.parse(res);
        //             for (var i = 0; i < getlist.length; i++) {
        //                 // console.log(getlist[i].name,getlist[i].dislike);
        //                 if (getlist[i].name === name) {
        //                     if (getlist[i].dislike) {
        //                         getlist[i].dislike = false;
        //                     }
        //                     else {
        //                         getlist[i].dislike = true;
        //                     }
        //                     // console.log("llladsafdsf");

        //                 }
        //             }

        //             AsyncStorage.setItem('list', JSON.stringify(getlist),
        //                 () => {
        //                     this.setState({
        //                         jdlist: getlist
        //                     }, () => {
        //                         for (var i = 0; i < getlist.length; i++) {
        //                             console.log(getlist[i].name, getlist[i].dislike);
        //                         }
        //                     })
        //                 }
        //             )
        //         }

        //     });
    }

    render() {
        return (
            // <View>
            <ImageBackground
                source={require('../../assets/lzy/p1.jpg')}
                style={styles.showbody}
            >
                {/* <View style={styles.tabbar}> */}
                <ImageBackground
                    resizeMode='cover'
                    source={require("../../assets/dqh/search.jpg")}
                    style={styles.tabbar}
                >
                    <TouchableOpacity
                        style={styles.backicon}
                        onPress={() => Actions.pop()}
                    >
                        <Image
                            style={styles.backicon}
                            resizeMode='contain'
                            source={require("../../assets/lzy/dfanhui.png")}
                        />
                    </TouchableOpacity>

                    {/* <Icon
                            style={styles.backicon}
                            name="left"
                            onPress={() => Actions.pop()}
                        /> */}
                    <Text style={styles.title}>{this.state.name}</Text>
                </ImageBackground>

                {/* </View> */}
                {
                    this.state.loading ? (<View style={styles.load}><ActivityIndicator size='large' color='red' /></View>):null
                }
                <FlatList
                    numColumns={1}
                    data={this.state.jdlist}
                    renderItem={({ item, idx }) => {
                        var changecolor = item.likeflag === 'dislike' ? styles.dislike : styles.like;
                        return <View style={styles.placelist}>
                            <TouchableOpacity
                                onPress={() => Actions.placeDetail({ title: item.name })}
                            >
                                <Image style={styles.img}
                                    resizeMode="contain"
                                    source={item.picpath}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    // backgroundColor:'yellow',
                                    // width:320*s,
                                    flex: 1,
                                    height: 240 * s,
                                    marginLeft: 15 * s,
                                    padding: 20 * s,
                                    alignItems: 'center'
                                }}
                                onPress={() => Actions.placeDetail({ title: item.placename })}
                            >
                                <Text style={styles.headtitle}>{item.placename}</Text>
                                {/* <Text>{item.introduce.length>15?(item.introduce.substr(0,15)+'......'):item.introduce}</Text> */}
                                <Text>{item.introduce.length > 50 ? (item.introduce.substr(0, 50) + '......') : item.introduce}</Text>
                                {/* <Text>{item.introduce}</Text> */}
                            </TouchableOpacity>
                            <Icon name="heart" style={[styles.ico, changecolor]} onPress={() => this.addlike(item.placename)} />

                        </View>
                    }}
                />
            </ImageBackground>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    showbody: {
        flex: 1,
    },
    img: {
        width: 200 * s,
        height: 250 * s
    },
    load:{
        width:width,
        height:height,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#fff'
    },
    placelist: {
        // width:width*0.8,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 25 * s,
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderRadius: 20 * s,
        borderWidth: 1 * s,
        // backgroundColor:'yellow',
        padding: 15 * s,
        // marginTop:10*s,
        position: 'relative',
        elevation: 20,
        shadowColor: '#eee',
        shadowOffset: { h: 10, w: 10 },
        shadowRadius: 3,
        shadowOpacity: 0.8,
    },
    ico: {
        position: 'absolute',
        right: 30 * s,
        bottom: 40 * s,
    },
    tabbar: {
        width: width,
        height: 85 * s,
        flexDirection: 'row',
        backgroundColor: '#B0C4DE',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    backicon: {
        width: 45 * s,
        height: 45 * s,
        position: 'absolute',
        left: 10 * s,
        color: '#20B2AA'
    },
    title: {
        fontSize: 21,
        // color: 'white'
    },
    headtitle: {
        fontSize: 20,
        // marginTop:20*s,
        marginBottom: 20 * s,
    },
    like: {
        color: 'red'
    },
    dislike: {
        color: 'grey'
    }
})

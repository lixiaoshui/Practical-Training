import React, { Component } from 'react'
import {
    View, Text,
    StyleSheet, ImageBackground,
    Dimensions, TextInput,
    ScrollView, TouchableOpacity, FlatList, Image,
} from "react-native";
import { myFetch } from '../utils/index';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 640;

var list=[
    {
        name:'太和殿',
        picpath:require("../../assets/lzy/dtaihe.png"),
        introduce:'大家发的说法你看见奥德赛那两分的收纳砍大发'
    },
    {
        name:'太和殿',
        picpath:require("../../assets/lzy/dtaihe.png"),
        introduce:'大家发的说法你看见奥德赛那两分的撒反馈经典款解放军噢IE我'
    },
    {
        name:'太和殿',
        picpath:require("../../assets/lzy/dtaihe.png"),
        introduce:'大家发的说法你看见奥德赛那两分的女超，明细账呢，被警方'
    },
    {
        name:'太和殿',
        picpath:require("../../assets/lzy/dtaihe.png"),
        introduce:'大家发的说法你看见奥德赛那两分的说法new覅偶我'
    }
]

export default class Jdlist extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            name:"gugong"
        }
    }
    componentDidMount(){
        // fetch("/jdlist",{
        //     method:'GET',
        //     headers:{
        //         "Accept":'application/json',
        //         'Content-type':'application/json'
        //     },
        //     body:JSON.stringify({jdname:'gugong'})
        // }).then(res=>{
        //     console.log(res.data);
        // })
    }
    render() {
        return (
            <View>
                <FlatList
                    numColumns={1}
                    data={list}
                    renderItem={({ item, idx }) => (
                        <View style={styles.placelist}>
                            <TouchableOpacity
                                onPress={()=>Actions.placeDetail()}
                            >
                                <Image style={styles.img} 
                                    resizeMode="contain" 
                                    source={item.picpath}
                                />
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                key={idx}
                                style={{
                                    height:250*s,
                                    // backgroundColor:'pink',
                                    justifyContent:'center',
                                    marginLeft:10*s,
                                }}
                                onPress={()=>Actions.placeDetail()}
                            >
                                <Text>{item.introduce.length>15?(item.introduce.substr(0,15)+'......'):item.introduce}</Text>
                            </TouchableOpacity>
                            <Icon name="like" style={styles.ico}/>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    img:{
        width:200*s,
        height:250*s
    },
    placelist:{
        flexDirection:'row',
        alignItems:'center',
        margin:10*s,
        borderColor:'green',
        borderRadius:20*s,
        borderWidth:1*s,
        // backgroundColor:'yellow',
        padding:15*s,
        // marginTop:10*s,
        position:'relative'
    },
    ico:{
        position:'absolute',
        right:30*s,
        bottom:40*s,
    }
})

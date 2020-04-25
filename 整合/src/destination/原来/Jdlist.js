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
        introduce:'大家发的说法你看见奥德赛那两分的收纳砍大发么么么么么么扩多所啦付军卡多付虚拟从v拿到手卡快疯了'
    },
    {
        name:'保和殿',
        picpath:require("../../assets/lzy/dtaihe.png"),
        introduce:'大家发的说法你看见奥德赛那两分的撒反馈经典款解放军噢IE我但是你检查你写嫁女记谁看得见覅哦啊诶发'
    },
    {
        name:'中和殿',
        picpath:require("../../assets/lzy/dtaihe.png"),
        introduce:'大家发的说法你看见奥德赛那两分的女超，明细账呢，被警方哪段时间阿卡纳分类可多思考法鸡诶哦覅王二of打发大水拿出来许可证是没空看从v可分配 下次再你看不可兼得'
    },
    {
        name:'养心殿',
        picpath:require("../../assets/lzy/dtaihe.png"),
        introduce:'大家发的说法你看见奥德赛那两分的说法new覅偶我乡村支教哪段时间会计分录跨境电商拉法兰'
    }
]

export default class Jdlist extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            name:props.title
        }
        console.log(props.title+'333');
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
                <View style={styles.tabbar}>
                    <Icon 
                        style={styles.backicon} 
                        name="like"
                        onPress={()=>Actions.pop()}
                    />
                    <Text style={styles.title}>{this.state.name}</Text>
                </View>
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
                                style={{
                                    // backgroundColor:'yellow',
                                    // width:320*s,
                                    flex:1,
                                    height:240*s,
                                    marginLeft:15*s,
                                    padding:20*s,
                                    alignItems:'center'
                                }}
                                onPress={()=>Actions.placeDetail({title:item.name})}
                            >
                                <Text style={styles.headtitle}>{item.name}</Text>
                                {/* <Text>{item.introduce.length>15?(item.introduce.substr(0,15)+'......'):item.introduce}</Text> */}
                                <Text>{item.introduce.length>50?(item.introduce.substr(0,50)+'......'):item.introduce}</Text>
                                
                                {/* <TouchableOpacity
                                    key={idx}
                                    style={{
                                        // height:250*s,
                                        backgroundColor:'pink',
                                        justifyContent:'center',
                                        // marginLeft:10*s,
                                    }}
                                    onPress={()=>Actions.placeDetail({'key':'故宫'})}
                                >
                                </TouchableOpacity> */}
                                {/* <Icon name="like" style={styles.ico}/> */}
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
    },
    tabbar:{
        width:width,
        height:70*s,
        flexDirection:'row',
        backgroundColor:'#B0C4DE',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
    },
    backicon:{
        position:'absolute',
        left:20*s,
        color:'#20B2AA'
    },
    title:{
        fontSize:21,
        color:'white'
    },
    headtitle:{
        fontSize:20,
        // marginTop:20*s,
        marginBottom:20*s,
    }
})

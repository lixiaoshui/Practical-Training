// import React, { Component } from 'react';
// import { View, Text, Dimensions,Button,ScrollView, TextInput, Image, StyleSheet, TouchableOpacity, StatusBar, } from 'react-native';
// import { Actions } from "react-native-router-flux";
// import { Icon } from '@ant-design/react-native';
// import Swiper from 'react-native-swiper';


// const { width } = Dimensions.get('window');
// const s = width / 640;

// export default class Home extends Component {
//     render() {
//         return (
//             <View>
//                 <ScrollView>
//                 <View style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-around',
//                     height: 80*s,
//                     backgroundColor: '#f23030',
//                     alignItems: 'center'
//                 }}>

//                     {/* <StatusBar backgroundColor='red'/> */}
//                     <View style={{
//                         width: '80%',
//                         flexDirection: 'row',
//                         height: 56*s,
//                         alignItems: 'center',
//                         backgroundColor: '#fbb8b8',
//                         marginRight: 10*s,
//                         paddingLeft: 15*s,
//                         borderRadius: 28*s,
//                     }}>
//                         <Icon name="search" style={{ color: "#fff" }} />
//                         <TextInput placeholder="请输入您要搜索的关键字" placeholderTextColor="#fff" style={{ fontSize: 17,padding:0,paddingLeft:15*s }} />
//                     </View>
//                     <Icon name="shopping-cart" style={{ color: "#fff" }} />
//                 </View>
//                 <View>
//                     <Image
//                         source={require("../../assets/images/bgimg.jpg")}
//                         style={{ height: 273*s, width: '100%' }}
//                         resizeMode="contain"
//                     />
//                 </View>
//                 <View style={{
//                     flexDirection: 'column'
//                 }}
//                 >
//                     <View style={styles.box}>
//                         <View style={styles.bone}>
//                             <Image style={styles.pic} source={require("../../assets/images/introduce_06.jpg")} />
//                             <Text style={styles.txt}>居家维修保养</Text>
//                         </View>
//                         <Icon name="right" />
//                     </View>
//                     <View style={styles.box}>
//                         <View style={styles.bone}>
//                             <Image style={styles.pic} source={require("../../assets/images/introduce_09.jpg")} />
//                             <Text style={styles.txt}>住宿优惠</Text>
//                         </View>
//                         <Icon name="right" />
//                     </View>
//                     <View style={styles.box}>
//                         <View style={styles.bone}>
//                             <Image style={styles.pic} source={require("../../assets/images/introduce_11.jpg")} />
//                             <Text style={styles.txt}>出行接送</Text>
//                         </View>
//                         <Icon name="right" />
//                     </View>
//                     <View style={styles.box}>
//                         <View style={styles.bone}>
//                             <Image style={styles.pic} source={require("../../assets/images/introduce_13.jpg")} />
//                             <Text style={[styles.txt, styles.spetxt]}>E族活动</Text>
//                         </View>
//                         <Icon name="right" />
//                     </View>
//                 </View>
//                 <View style={{
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: "center",
//                     marginTop: 20
//                 }}>
//                     <TouchableOpacity
//                         style={{
//                             width: 350*s,
//                             height: 60*s,
//                             borderRadius: 20*s,
//                             backgroundColor: "#f23030",
//                         }}
//                     >
//                         <Text style={{
//                             color: '#fff',
//                             textAlign: 'center',
//                             lineHeight: 60*s,
//                             fontSize: 18
//                         }}>发布需求</Text>
//                     </TouchableOpacity>
//                     <Text style={{
//                         color: '#767676',
//                         textAlign: 'center',
//                         marginTop: 30*s
//                     }}>©E族之家 版权所有</Text>
//                 </View>
//                 </ScrollView>
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     box: {
//         width: "100%",
//         height: 120*s,
//         backgroundColor: "#fff",
//         marginTop: 10*s,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingRight: 30*s
//     },
//     bone: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: "center"
//     },
//     txt: {
//         fontSize: 22,
//         fontFamily: "Microsoft YaHei",
//         color: "#333333",
//         marginLeft: 30*s
//     },
//     spetxt: {
//         color: "#f79999"
//     },
//     pic: {
//         width: 120*s,
//         // height: 88*s,
//         resizeMode: 'contain'
//     },
// })

//https://fb.me/react-async-component-lifecycle-hooks
import React ,{Component}from 'react';
import {SafeAreaView,StyleSheet, View,FlatList,
  Text,Image,StatusBar, TextInput,Dimensions, ScrollView, ImageBackground,} from 'react-native';
import { Carousel, Button} from '@ant-design/react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get("window");
const w=width/640;
const article =[
  {
    img:require("../../assets/dqh/article1.png"),
    tit:"故宫的大怪兽：让你看到一个不一样的故宫文化介绍",
  },
  {
    img:require("../../assets/dqh/article2.png"),
    tit:"老北京的传说:太和殿的龙没法儿数",
  },
  {
    img:require("../../assets/dqh/article3.png"),
    tit:"景色如画：        欣赏各地景色，提升文化素养",
  },
]
export default class Home extends Component{
render(){
  return (
    <ImageBackground source={require("../../assets/dqh/homebc.png")} style={{width: '100%',height:"100%"}}>
    <View>
      <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%',}}>
      <View style={styles.head}>
          <View style={styles.search}>
              <TextInput placeholder='请输入目的地'
                  style={{color:"white",fontSize:10}} >
              </TextInput>
              <Icon name="search" style={{fontSize:30*w,marginLeft:120*w,color:"green"}} />
          </View>
      </View>
      </ImageBackground>
    
    <ScrollView>
    <Carousel
      autoplay
      infinite
      dotStyle={{ backgroundColor: "white" }}
      dotActiveStyle={{ backgroundColor: "red" }}
      style={{overflow:"hidden",height:300*w}}
    >
       <Image source={require("../../assets/dqh/1.png")} style={styles.car}/>
       <Image source={require("../../assets/dqh/2.png")} style={styles.car}/>
       <Image source={require("../../assets/dqh/3.png")} style={styles.car}/>
       <Image source={require("../../assets/dqh/4.png")} style={styles.car}/>
    </Carousel>
    <View style={styles.gg}>
      <ImageBackground  source={require("../../assets/dqh/dmaoxian.jpg")} style={styles.gugong} >
      <Text  style={styles.ggp} onPress={()=>Actions.game()}>故宫大冒险：让你在游戏中了解故宫</Text>
      </ImageBackground>
    </View>
    <View style={styles.articles}>
        <Text style={styles.article}>文章推送</Text>
        <Text style={styles.look} onPress={()=>Actions.article()}>查看更多>></Text></View>
        <FlatList 
          data={article}
          renderItem={({item})=>(
              <View style={styles.flat}>
                <View>
                  <Text 
                    style={{fontSize:16,marginRight:30*w,width:200*w}}
                    >{item.tit}</Text>
                </View>
                <View >
                  <Image 
                    style={styles.flimg}
                    source={item.img}/>
                </View>
              </View>
          )}
          />
          <View style={{height:100*w}}></View>
      </ScrollView>
      </View>
  </ImageBackground>
  );
};

}
const styles = StyleSheet.create({
  head:{ 
    flexDirection: 'row',
    height:90*w,
    paddingLeft:15*w,
    paddingTop:15*w,
    paddingBottom:15*w,
    },
  search:{
    width:'50%',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:10*w,
    paddingLeft:10*w,
    borderWidth:2*w,
    borderColor:"gray"
  },
  gg:{
    backgroundColor:"black",
    opacity:0.8,
    
    width:540*w,
    height:300*w,
    margin:50*w,
  },
  gugong:{
    width:540*w,
    height:300*w,
    borderColor:"brown",
    flexDirection:'row',
    alignItems:"flex-end",
    overflow:"hidden",
  },
  ggp:{
    color:"white",
    fontSize:14,
    marginLeft:60*w,
    marginBottom:40*w,
  },
  car:{
    width:width,
    height:360*w,
  },
  articles:{
    width:"100%",
    overflow:"hidden",
    flexDirection:'row',
    alignItems:'center',
  },
  article:{
    fontSize:22,
    flexDirection:'row',
  },
  look:{
    marginLeft:300*w,
    flexDirection:'row',
    fontSize:16,
    color:"green",
  },
  artimg:{
    width:"30%"
  },
  flat:{
    backgroundColor:"white",
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    height:200*w,
    borderRadius:10,
    borderWidth:1*w,
    marginTop:20*w,
    marginLeft:"5%"
  },
  flimg:{
    height:160*w,
    width:240*w,
    borderRadius:5*w,
    flexDirection: 'row',
    justifyContent:'center',
  },
})


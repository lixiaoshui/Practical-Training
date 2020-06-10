//https://fb.me/react-async-component-lifecycle-hooks
import React ,{Component}from 'react';
import {SafeAreaView,StyleSheet, View,FlatList,
  Text,Image,TouchableOpacity,  TextInput,Dimensions, ScrollView, ImageBackground,} from 'react-native';
import { Carousel, Button} from '@ant-design/react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get("window");
const w=width/640;
export default class Home extends Component{
render(){
  return (
    <ImageBackground source={require("../../assets/dqh/homebc.png")} style={{width: '100%',height:"100%" ,flex: 1,}}>
    <View>
      {/* <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%',}}>
          <View style={styles.head}>
              <View style={styles.search}>
                  <TextInput placeholder='请输入目的地'
                      style={{color:"white",fontSize:10}} >
                  </TextInput>
                  <Icon name="search" style={{fontSize:30 * w,marginLeft:240 * w,color:"green"}} onPress={()=>Actions.showresult()}/>
              </View>
          </View>
      </ImageBackground> */}
      
      <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%',}}>
        <View style={styles.head}>
            <View style={styles.search}>
                <TextInput placeholder='请输入目的地'
                    style={{color:"white",fontSize:10}} >
                </TextInput>
                <Icon name="search" style={{fontSize:30 *w,marginLeft:240 *w,color:"green"}} onPress={()=>Actions.showresult()}/>
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
              <View style={styles.flat}>
                <View>
                  <Text 
                    style={{fontSize:16,marginRight:30*w,width:200*w}} onPress={()=>Actions.essay()}
                    >故宫的大怪兽：让你看到一个不一样的故宫文化介绍</Text>
                </View>
                <View >
                  <Image 
                    style={styles.flimg}
                    source={require("../../assets/dqh/article1.png")}/>
                </View>
              </View>
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
    height:90 *w,
    paddingLeft:15 *w,
    paddingTop:15 *w,
    paddingBottom:15 *w,
    },
  search:{
    width:'70%',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:40 *w,
    paddingLeft:10 *w,
    borderWidth:2 *w,
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
    marginLeft:20,
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


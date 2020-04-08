import React ,{Component}from 'react';
import {SafeAreaView,StyleSheet, View,FlatList,
  Text,Image,StatusBar, TextInput,Dimensions, ScrollView,ImageBackground} from 'react-native';
import { Carousel, Button } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");
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
export default class Article extends Component{
render(){
  return (
    <View>
        <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%'}}>
            
            <View style={styles.head}>
                <Icon name="chevron-left" onPress={()=>Actions.pop()} style={{marginLeft:"5%"}}/>
                <Text style={styles.tuisong}>文章推送</Text>
            </View>
        </ImageBackground>
        <ScrollView>
        <ImageBackground source={require("../../assets/dqh/homebcc.png")} style={{width: '100%',height:height}}>
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
    
        </ImageBackground>
        </ScrollView>
    </View>
  );
};

}
const styles = StyleSheet.create({
    head:{
        flexDirection: 'row',
        height:90*w,
        paddingTop:15*w,
        paddingBottom:15*w,
        flexDirection: 'row',
        alignItems:"center",
    },
    tuisong:{
        fontSize:16,
        marginLeft:"35%"
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
  
  


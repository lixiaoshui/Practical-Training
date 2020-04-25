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
      id:1,
      tit:"故宫的大怪兽",
      content:"天哪，故宫里的神兽和动物们都开口说话了！这是怎么回事呢？小学生李小雨在故宫捡到了一个神奇的宝石耳环，神奇的事情就这样发生了，她竟然能听懂故宫里的神兽和动物们的语言了。于是，李小雨在野猫梨花的带领下，认识了那些在故宫里生活了几百年的怪兽们，并和他们发生了许多惊险又有趣的故事。但李小雨始终没有放弃寻找宝石耳环的主人，他究竟是谁呢……",
    },
    {
      id:2,
      tit:"老北京的传说",
    },
    {
      id:3,
      tit:"景色如画",
    },
    
  ]
export default class Article extends Component{

    
    render(){
    return (
        // <View>
        //     <ScrollView>
        //     <ImageBackground source={require("../../assets/dqh/homebc.png")} style={{width: '100%',height:height}}>
        //     <FlatList 
        //         data={article}
        //         renderItem={({item})=>(
        //             <View style={styles.flat} onPress={()=>Actions.essay()}>
        //                 <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%'}}>
        //                     <View style={styles.head}>
        //                         <Icon name="chevron-left" onPress={()=>Actions.pop()} style={{marginLeft:"5%"}}/>
        //                         <Text style={styles.tuisong}>{item.tit}</Text>
        //                     </View>
        //                 </ImageBackground>
        //                 <View>
        //                     <Text 
        //                         style={{fontSize:16,width:width}} 
        //                         >{item.content}</Text>
        //                 </View>
        //             </View>
        //         )}
        //     />
        //     </ImageBackground>
        //     </ScrollView>
        // </View>

        <View>
            <ScrollView>
            <ImageBackground source={require("../../assets/dqh/homebc.png")} style={{width: '100%',height:height*0.9}}>
            <FlatList 
                data={article}
                renderItem={({item})=>(
                    <View style={{height:height}}>
                    <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%'}}>
                        <View style={styles.head}>
                            <Icon name="chevron-left" onPress={()=>Actions.pop()} style={{marginLeft:"5%"}}/>
                            <Text style={styles.tuisong}>{item.tit}</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text>{item.content}</Text>
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
  
  


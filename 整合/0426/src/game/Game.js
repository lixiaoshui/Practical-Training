import React ,{Component}from 'react';
import {SafeAreaView,StyleSheet, View,FlatList,
  Text,Image,StatusBar, TextInput,Dimensions, ScrollView,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome'
const {width} = Dimensions.get("window");
const w=width/640;

export default class Game extends Component{
render(){
  return (
    <View >
      <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%'}}>
        <View style={styles.head}>
            <Icon name="chevron-left" onPress={()=>Actions.pop()} style={{marginLeft:"5%"}}/>
            <Text style={styles.gugong}>故宫大冒险</Text>
        </View>
      </ImageBackground>
      <ImageBackground source={require("../../assets/dqh/gamebc.jpg")} style={{width: '100%',height:"100%"}}>
        <View style={{height:100*w}}/>
        <View style={styles.game}>
            <ImageBackground source={require("../../assets/dqh/jishou.jpg")} style={styles.gamebc}>
                <Text style={styles.gamep}>太和殿上的脊兽</Text>
            </ImageBackground>
        </View>
        <View  style={styles.game}>
            <ImageBackground source={require("../../assets/dqh/qvshui.png")} style={styles.gamebc}>
                <Text style={styles.gamep2}  onPress={()=>Actions.qvshui()}>曲水流觞</Text>
            </ImageBackground>
        </View>
        </ImageBackground>
    </View>
  );
};

}
const styles = StyleSheet.create({
  head:{
      height:90*w,
      paddingTop:15*w,
      paddingBottom:15*w,
      flexDirection: 'row',
      alignItems:"center",
  },
  gugong:{
      fontSize:16,
      marginLeft:"35%"
  },
  game:{
    height:320*w,
    width:500*w,
    marginLeft:70*w,
    marginTop:50*w,
    borderWidth:2*w,

  },
  gamebc:{
    width:496*w,
    height:316*w,
    alignItems:"flex-end",
    flexDirection: 'row',
  },
  gamep:{
    color:"white",
    flexDirection: 'row',
    marginLeft:"30%",
    marginBottom:20*w,
  },
  gamep2:{
    flexDirection: 'row',
    marginLeft:"40%",
    marginBottom:20*w,
  }
})



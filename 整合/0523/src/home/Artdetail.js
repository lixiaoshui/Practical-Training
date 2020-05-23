import React ,{Component}from 'react';
import {SafeAreaView,StyleSheet, View,FlatList,
  Text,Image, TextInput,Dimensions, ScrollView,ImageBackground} from 'react-native';
import { Carousel, Button } from '@ant-design/react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");
const w=width/640;
export default class Artdetail extends Component {
    render() {
        return (
           <View>
               <ImageBackground source={require("../../assets/dqh/search.jpg")} style={{width: '100%'}}>
                    <View style={styles.head}>
                        <Icon name="chevron-left" onPress={()=>Actions.pop()} style={{marginLeft:"5%"}}/>
                        <Text style={styles.artname}>文章名字</Text>
                    </View>
                </ImageBackground>
                
                <ImageBackground source={require("../../assets/dqh/homebcc.png")} style={{width: '100%',height:height}}>
                    <View>

                    </View>
                </ImageBackground>
           </View>
        )
    }
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
    artname:{
        fontSize:16,
        marginLeft:"35%"
    },
})
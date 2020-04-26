import React ,{Component}from 'react';
import {SafeAreaView,StyleSheet, View,FlatList,
  Text,Image,StatusBar, TextInput,Dimensions,TouchableOpacity, ScrollView,ImageBackground} from 'react-native';
import { Carousel, Button } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils/index';
const {width} = Dimensions.get("window");
const {height} = Dimensions.get("window");
const w=width/640;
const article =[
    {
      img:require("../../assets/dqh/article1.png"),
      tit:"故宫的大怪兽：让你看到一个不一样的故宫",
      title:"故宫的大怪兽",
    },
    {
      img:require("../../assets/dqh/article3.png"),
      tit:"北新桥的故事：欣赏各地景色，提升文化素养",
      title:"北新桥的故事",
    },
    {
      img:require("../../assets/dqh/article2.png"),
      tit:"老北京的传说：太和殿的龙没法儿数",
      title:"老北京的传说",
    },
    
  ]
export default class Article extends Component{
  componentDidMount() {
    myFetch.get('/getArticlelist', {
        jdtitle: '太和殿'
    })
        .then(res => {
            this.setState({
                data: res.data
            }, () => {
                console.log(res.data);

            })
        })
}
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
        <ImageBackground source={require("../../assets/dqh/homebcc.png")} style={{width: '100%',height:height*0.9}}>
        {
            article.map((item) => (
              <View style={styles.flat} >
                  <View>
                      <Text 
                          style={{fontSize:16,marginRight:30*w,width:200*w}} 
                          onPress={() => Actions.articleDetail({title:item.title})}
                          >{item.tit}</Text>
                  </View>
                  <View >
                      <Image 
                          style={styles.flimg}
                          source={item.img}/>
                  </View>
              </View>
          ))
        }
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
    showbody: {
      flex: 1,
  },
  searchbar: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
  },
  search: {
      width: 450 *w,
      height: 50 *w,
      paddingLeft: 30 *w,
      borderWidth: 2 *w,
      borderColor: "#999999",
      borderRadius: 25 *w,
  },
  icon: {
      position: "absolute",
      top: 8 *w,
      right: 110 *w
  },
  // 风俗文化
  titlebar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20 *w
  },
  name: {
      fontSize: 22,
  },
  culshow: {
      width: width,
      flexDirection: "row",
      justifyContent: 'space-evenly',
      marginTop: 25 *w,
  },
  Articlebg: {
      width: 180 *w,
      height: 230 *w,
  },
  Articlebgp: {
      position: "relative"
  },
  Articlename: {
      fontSize: 20,
      position: "absolute",
      top: 100 *w,
      left: 60 *w
  },
  // 景点
  placelist: {
      margin: 30 *w,
  },
  citybg: {
      width: 250 *w,
      height: 150 *w,
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
      top: 43 *w,
      left: 40 *w,
      alignItems: 'center',
  },
  nametxt: {
      fontSize: 17,
      color:'#fff'
  }
  })
  
  


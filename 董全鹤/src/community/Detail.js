import React, { Component } from 'react'
import { Text,TextInput, View, StyleSheet, ImageBackground ,Image,Scene ,TouchableOpacity, ImageStore} from 'react-native'
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

const styles=StyleSheet.create({
    top: {
        height: 62,
        width: '100%',
    },
    back:{
        paddingLeft:15,
        // paddingTop:20,
        paddingTop:30
    },
    title:{
        fontSize:24,
        position:'absolute',
        top:20,
        left:185
    },
    topbutton: {
        borderRadius: 15,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 25,
        right: 40
    },
    content:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    per:{
        width:404,
        height:670,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:18,
        marginTop:12
    },
    person:{
        justifyContent:'center',
        height:70,
        borderBottomWidth:1,
        borderColor:'grey'
    },
    admin:{
        position:"absolute",
        top:20,
        left:90,
        fontSize:20
    }
})

// const data=[];
export default class Detail extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         dataa:[],
    //         content:'',
    //         files:data,
    //         multiple:true,
    //         username:store.getState().getuser,
    //     }
    // }
    // onChange=(e)=>{
    //     e.preventDefault();
    //     const filelist = e.target.files;
    //     const formData = new FormData();
    //     var date = new Date();
    //     for(const key in filelist){
    //         formData.append(this.state.username.loginname+date.getTime()+Math.random().toFixed(5),filelist[key]);
    //         console.log(filelist[key],date.getTime());
    //     }
    //     console.log(formData);
    //     console.log(filelist);

    //     fetch('/dt/pic',{
    //         method:'POST',
    //         body:formData
    //     }).then(res=>res.json())
    //     .then(res=>{
    //         console.log(res)
    //     })
    // };
    // componentDidMount(){
        
    // }
    // change=(e)=>{
    //     this.setState({
    //         content:e.target.value
    //     })
    // }
    // push=(idx)=>{
    //     var filelist = [];
    //     console.log(this.state.files)
    //     console.log(filelist);
    //     fetch('/dt/save',{
    //         method:'POST',
    //         mode:'cors',
    //         headers:{
    //             'Content-Type':'application/x-www-form-urlencoded'
    //         },
    //         body:`username=${this.state.username.loginname}&content=${this.state.content}&picpath=${filelist}`
    //     })
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         this.setState({
    //             dataa:res.dataa
    //         })
    //         this.props.history.push('/tab');
    //     })
    // }
    render() {
        // const {files} = this.state;
        return (
            <View>
                <ImageBackground source={require('../../assets/lj/ljdetbg.jpg')} style={{width:'100%',height:918}} >
                    <View style={styles.top} >
                        <View>
                            <Icon name='chevron-left' onPress={Actions.pop} style={styles.back} />
                            <Text style={styles.title} >发表动态</Text>
                        </View>
                        <TouchableOpacity style={styles.topbutton}   >
                            <Text style={styles.topbtntext} style={{fontSize:16}} onPress={Actions.community} >发表</Text>
                            {/* <Text style={styles.topbtntext} style={{fontSize:16}} onPress={(idx)=>this.push(idx)} >发表</Text> */}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content} >
                        <View style={styles.per} >
                            <View style={styles.person} >
                                <Image style={{width:50,height:50,borderRadius:25,marginLeft:20}} source={require('../../assets/yjy/ytx.png')} />
                                <Text style={styles.admin} >小知</Text>
                            </View>
                            <TextInput placeholder='分享新鲜事...' style={{ height: 60 }}
                            //  value={this.state.content} onChange={(e)=>this.change(e)} 
                             >

                            </TextInput>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

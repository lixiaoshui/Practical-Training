import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid,AsyncStorage} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';

import Release from './component/Release';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register';

import Home from './src/home/Home';

import Destination from './src/destination/Destination';
import cultureList from './src/culture/cultureList';
import cultureDetail from './src/culture/cultureDetail';
import tryselect from './src/destination/tryselect';
import Placedetail from './src/destination/Placedetail';

import Community from './src/community/Community';
import Detail from './src/community/Detail';

import Mine from './src/mine/Mine';
import Change from './src/mine/Change';
import Editor from './src/mine/Editor';


console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;

	let init =()=>{
		// AsyncStorage.clear();
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install');
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}} >
			<SwiperPage afterInstall={afterInstall} />
		</View>
	}
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="grey"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'grey'} 
											name="home"
										/>
									}
									hideNavBar
								>
									<Scene key='home' component={Home}/>
								</Scene>
								{/* 目的地 */}
								<Scene key='destination'
									title='目的地'
									icon={
										({focused})=><Icon 
											color={focused?'red':'grey'} 
											name="appstore"
										/>
									}
									hideNavBar
								>
									<Scene hideNavBar hideTabBar key="destinationIndex" component={Destination}/>
									<Scene 
									key="cultureList" 
									title="风俗文化目录"
									component={cultureList}
									titleStyle={{flex:1,color:'#fff',textAlign:'center'}}
									headerStyle={{backgroundColor:'#e3e3de'}}
									navBarButtonColor='#fff'
									/>
									<Scene 
									key="cultureDetail" 
									title="风俗文化详情"
									component={cultureDetail}
									titleStyle={{flex:1,color:'#fff',textAlign:'center'}}
									headerStyle={{backgroundColor:'#e3e3de'}}
									navBarButtonColor='#fff'
									/>
									<Scene 
									key="placeDetail" 
									title="景点详情"
									component={Placedetail}
									titleStyle={{flex:1,color:'#fff',textAlign:'center'}}
									headerStyle={{backgroundColor:'#e3e3de'}}
									navBarButtonColor='#fff'
									/>
								</Scene>
								{/* 社区 */}
								<Scene 
									hideNavBar
									key='communityPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'grey'} 
											name='build'/>
										}
									title="社区"
								>
									<Scene key="community" component={Community} />
								</Scene>
								{/* 我的 */}
								<Scene 
									hideNavBar
									key='userPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'grey'} 
											name='user'/>
										}
									title="我的"
								>
									<Scene key="mine" component={Mine}/>
								</Scene>
							</Tabs>
						</Scene>
					</Drawer>
				</Lightbox>
				<Scene initial={!isLogin}  key="login" component={Login} />		
				<Scene key="register" component={Register} />
				<Scene key='release' component={Release} />
				<Scene key='detail' component={Detail} />

				<Scene key="tryselect" component={tryselect}/>

				<Scene key='change' component={Change} />
				<Scene key='editor' component={Editor} />
			</Modal>
			</Overlay>
		</Router>
	);
};

export default App;
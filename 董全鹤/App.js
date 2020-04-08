
import React from 'react';
import {View,BackHandler,Text,ToastAndroid,AsyncStorage,Alert} from 'react-native';
import {Router,Overlay,Lightbox, Drawer,  Scene, Tabs, Modal, Actions} from 'react-native-router-flux';
import {Carousel} from '@ant-design/react-native'
import Hc from './src/Hc'
import Home from './src/Home'

let now = 0;
const App =() => {
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
	<Modal key="modal" hideNavBar>
		<Lightbox key="lightbox"> 
			<Scene key="root">
				<Tabs 
					key='tabbar'
					hideNavBar
					activeTintColor="red"
					inactiveTintColor="blue"
					tabBarStyle={{backgroundColor:'#ccc'}}
				>
					{/* 首页 */}
					<Scene key='homePage'
						hideNavBar
						title='首页'
					>
						<Scene key='home' 
							component={Home}
						/>
					</Scene>
					{/* 商品分类 */}
					<Scene key='goodsPage'
						hideNavBar
						title='商品分类'
						
					>
						<Scene key="goods" component={Hc}/>
					</Scene>
					{/* 用户中心 */}
					<Scene 
						key='userPage'
						hideNavBar
						hideDrawerButton
						title="用户中心"
						><Scene key="goods" component={Home}/></Scene>
				</Tabs>
			</Scene>
		</Lightbox>
	</Modal>
	</Router>
  );
};



export default App;

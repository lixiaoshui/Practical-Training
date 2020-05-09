
import React from 'react';
import {View,BackHandler,Text,ToastAndroid,AsyncStorage,Alert} from 'react-native';
import {Router,Overlay,Lightbox, Drawer,  Scene, Tabs, Modal, Actions,renderRightButton} from 'react-native-router-flux';
import {Carouse} from '@ant-design/react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import { Icon } from '@ant-design/react-native';
import Qvshui from './src/game/Qvshui'
import Game from './src/game/Game'

import Home from './src/home/Home'
import Essay from './src/home/Essay'
import Article from "./src/home/Article"
import ArticleDetail from './src/home/ArticleDetail'

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
					inactiveTintColor="gray"
				>
					{/* 首页 */}
					<Scene key='homePage'
						hideNavBar
						title='首页'
						icon={
							({focused})=><Icon 
								color={focused?'red':'gray'} 
								name="home"
								style={{fontSize:18}}
							/>
						}
					>
						<Scene key='home' 
							component={Home}
						/>
					</Scene>
					{/* 目的地 */}
					<Scene key='destination'
						hideNavBar
						title='目的地'
						icon={
							({focused})=><Icon 
								color={focused?'red':'gray'} 
								name="appstore"
								style={{fontSize:18}}
							/>
						}
					>
						<Scene key="goods" component={Article}/>
					</Scene>
					{/* 社区 */}
					<Scene key='community'
						hideNavBar
						title='社区'
						icon={
							({focused})=><Icon 
								color={focused?'red':'gray'} 
								name="build"
								style={{fontSize:18}}
							/>
						}
					>
						<Scene key="game" component={Game}/>
					</Scene>
					{/* 我的 */}
					<Scene 
						key='userPage'
						hideNavBar
						hideDrawerButton
						title="用户中心"
						icon={
							({focused})=><Icon 
								color={focused?'red':'gray'} 
								name="user"
								style={{fontSize:18}}
							/>
						}
					>
						{/* <Scene key="ViewProject" component={ViewProject}/> */}
						<Scene key="essay" component={Essay}/>

					</Scene>
				</Tabs>
			</Scene>
		</Lightbox>

		<Scene key="article" component={Article}/>
		<Scene key="qvshui" component={Qvshui}/>
		<Scene key="articleDetail" component={ArticleDetail}/>
	</Modal>
	</Router>
  );
};



export default App;


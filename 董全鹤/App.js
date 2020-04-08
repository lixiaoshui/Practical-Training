
import React from 'react';
import {View,BackHandler,Text,ToastAndroid,AsyncStorage,Alert} from 'react-native';
import {Router,Overlay,Lightbox, Drawer,  Scene, Tabs, Modal, Actions,renderRightButton} from 'react-native-router-flux';
import {Carouse} from '@ant-design/react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Hc from './src/home/Hc'
import Home from './src/home/Home'
import Article from "./src/home/Article"
// import Pintu from './src/game/Pintu'
import Obj from './src/game/Obj'
// import Game from './src/game/Game'

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
								name="map-marker"
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
								name="building"
								style={{fontSize:18}}
							/>
						}
					>
						<Scene key="pintu" component={Obj}/>
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
						<Scene key="asdf" component={Obj}/>
					</Scene>
				</Tabs>
			</Scene>
		</Lightbox>
		<Scene key="article" component={Article}/>
		{/* <Scene key="game" component={Game} /> */}
		{/* <Scene key='Pintu' component={Pintu}/>    */}
	</Modal>
	</Router>
  );
};



export default App;


import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  TextInput,
  StatusBar,
  BackHandler,
  ToastAndroid,
  AsyncStorage,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Router, Scene, Tabs, Actions, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
// import Doc from "./components/Doc";
// import Msg from './components/Msg';
// import Detail from "./components/Detail";
// import Shouye from "./components/Shouye";
// import Personal from "./components/Personal";
import {Icon} from '@ant-design/react-native'
// import Shopcar from './components/Shopcar';
// // import Goods from "./components/Goods";
// // import Home from "./components/Home";
// import MyTs from './components/MyTs';
// // import Demo1 from './tsdemos/Demo1';
// import MyPublish from './src/userinfor/MyPublish';

// import Goods from './src/goods/Goods';
// import User from './src/userinfor/Userinfor';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
// import Demo from './components/Demo';
import Register from './src/common/Register';
import Destination from './src/destination/Destination';

import Qvshui from './src/game/Qvshui'
import Chengyv from './src/game/Chengyv'
import Game from './src/game/Game'
import Home from './src/home/Home'
import Essay from './src/home/Essay'
import Article from "./src/home/Article"
import ArticleDetail from './src/home/ArticleDetail'

import cultureList from './src/culture/cultureList';
import cultureDetail from './src/culture/cultureDetail';
import tryselect from './src/destination/tryselect';
import Placedetail from './src/destination/Placedetail';
import Jdlist from './src/destination/Jdlist';


import Community from './src/community/Community';
import Detail from './src/community/Detail';
import Dtcontent from './src/community/Dtcontent';

import Mine from './src/mine/Mine';
import Change from './src/mine/Change';
import Editor from './src/mine/Editor';
import Minedt from './src/mine/Minedt';
import Minecollect from './src/mine/Minecollect'

import searchResult from './src/search/searchResult';

console.disableYellowBox = true;//取消下面黄色的弹框提示





const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isFirstInstall, setFirstInstall] = useState(true);
  let now = 0;
  let init = () => {

    AsyncStorage.getItem('isFirstIntall')
      .then(res => {
        console.log('isinstall', res);
        if (res) {
          setFirstInstall(false);
        }
      });

    // AsyncStorage.clear();
    AsyncStorage.getItem('user')
      .then(res => {
        let user = JSON.parse(res);
        console.log('jjjjjjjjj' + res);
        if (!user) {
          SplashScreen.hide();
        }
        if (user && user.token) {
          SplashScreen.hide();
          setLogin(true);
        }
      })
  };
  function backAndroidHandler() {
    if (Actions.currentScene != 'home' && Actions.currentScene != 'login') {

      Actions.pop();
      console.log('now pop!!!!!' + Actions.currentScene);
      return true;

    } else {
      console.log('pop!!!!!' + Actions.currentScene);
      if (new Date().getTime() - now < 2000) {
        BackHandler.exitApp();
      } else {
        ToastAndroid.show('确定要退出吗', 100);
        now = new Date().getTime();
        return true;
      }
    }
  }

  useEffect(() => {
    init();
    BackHandler.addEventListener('hardwareBackPress', backAndroidHandler);
  });

  let afterInstall = () => {
    setFirstInstall(false);
  };

  if (isFirstInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }

  return (
    <>
      <Router>
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            {/* <Drawer key="drawer"
            contentComponent={()=><Text>drawer</Text>}
            drawerWidth={400}
            drawerIcon={()=><Icon name="menu"/>}
        > */}
            <Scene key="root">
              <Tabs
                key="tabbar"
                hideNavBar
                activeTintColor="red"
                inactiveTintColor="#b4b4b4"
              >
                
                <Scene key='homePage'
                  title='首页'
                  icon={
                    ({ focused }) => <Icon
                      color={focused ? 'red' : 'grey'}
                      name="home"
                      style={{fontSize:20}}
                    />
                  }
                  hideNavBar
                >
                  {/* <Scene key="indexye" component={Shouye}/> */}
                  <Scene key="home" component={Home} />

                </Scene>


                <Scene key="destination"
                  // hideNavBar
                  title="目的地"
                  icon={
                    ({ focused }) => <Icon
                      name="map-marker"
                      color={focused ? 'red' : '#b4b4b4'}
                      style={{fontSize:20}}
                    />
                  }
                >
                  <Scene
                    hideNavBar
                    // hideTabBar 
                    key="destinationIndex"
                    component={Destination} />
                  <Scene
                    key="cultureList"
                    title="风俗文化目录"
                    component={cultureList}
                    hideNavBar
                  />
                  <Scene
                    key="cultureDetail"
                    title="风俗文化详情"
                    hideNavBar
                    hideTabBar
                    component={cultureDetail}
                  />
                  <Scene
                    key="placeDetail"
                    title="景点详情"
                    hideNavBar
                    hideTabBar
                    component={Placedetail}
                    titleStyle={{ flex: 1, color: '#fff', textAlign: 'center' }}
                    headerStyle={{ backgroundColor: '#e3e3de' }}
                    navBarButtonColor='#fff'
                  />
                  <Scene
                    key="placelist"
                    title="景点列表"
                    hideNavBar
                    hideTabBar
                    component={Jdlist}
                  />
                </Scene>

                {/* 社区 */}
                <Scene
                  hideNavBar
                  key='communityPage'
                  hideDrawerButton
                  icon={({ focused }) =>
                    <Icon
                      color={focused ? 'red' : 'grey'}
                      name='building' 
                      style={{fontSize:20}}/>
                  }
                  title="社区"
                >
                  <Scene key="community" component={Community} />
                </Scene>
                {/* <Scene
                  key="tryselect"
                  component={tryselect}
                /> */}

                {/* 我的 */}
								<Scene 
									hideNavBar
									key='userPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'grey'} 
											name='user'
                      style={{fontSize:20}}/>
										}
									title="我的"
								>
									<Scene key="mine" component={Mine}/>
								</Scene>

              </Tabs>
            </Scene>
            {/* </Drawer> */}

          </Lightbox>
          <Scene initial={!isLogin}  key="login" component={Login} />		
				<Scene key="register" component={Register} />
				<Scene key='detail' component={Detail} />

				<Scene key="tryselect" component={tryselect}/>
				<Scene key='dtcontent' component={Dtcontent} />
        <Scene key="showresult" component={searchResult}/>

				<Scene key='change' component={Change} />
				<Scene key='editor' component={Editor} />
				<Scene key='minedt' component={Minedt} />
        <Scene key="minecollect" component={Minecollect}/>

        
        <Scene key="article" component={Article}/>
        <Scene key="qvshui" component={Qvshui}/>
        <Scene key="chengyv" component={Chengyv}/>
        <Scene key="articleDetail" component={ArticleDetail}/>
        <Scene key="essay" component={Essay}/>
        <Scene key="game" component={Game}/>
        </Modal>
      </Router>

    </>
  );
};

const styles = StyleSheet.create({

});

export default App;



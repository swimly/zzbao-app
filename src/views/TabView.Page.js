import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Head from '../components/HeadBar'
import TabBar from '../components/TabBar'
import HomeView from './HomeView'
import CustomerView from './CustomerView'
import OfferView from './OfferView'
import PersonerView from './PersonerView'
export default class TabView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabs:[{
          name: "首页",
          background: '#fbfbfb',
          color: '#666',
          right: [<Image style={styles.right} source={require("../../assets/images/tips.png")}></Image>],
          title: <Image source={require("../../assets/images/logo.png")}></Image>,
          icon: <Image style={styles.icon} source={require("../../assets/images/nav1.png")}></Image>,
          iconActive: <Image style={styles.icon} source={require("../../assets/images/nav1_active.png")}></Image>,
          view:<HomeView/>
      },{
          name:"客户管理",
          title:"客户管理",
          background: '#fbfbfb',
          right: [<Image style={styles.right} source={require("../../assets/images/add.png")}></Image>],
          color: '#666',
          icon: <Image style={styles.icon} source={require("../../assets/images/nav2.png")}></Image>,
          iconActive: <Image style={styles.icon} source={require("../../assets/images/nav2_active.png")}></Image>,
          view:<CustomerView/>
      },{
          name:"车险报价",
          title:"车险报价",
          background: '#fbfbfb',
          right: [],
          color: '#666',
          icon: <Image style={styles.icon} source={require("../../assets/images/nav3.png")}></Image>,
          iconActive: <Image style={styles.icon} source={require("../../assets/images/nav3_active.png")}></Image>,
          view:<OfferView/>
      },{
          name:"我的",
          title:"我的",
          background: '#EB3D00',
          right: [<Image style={styles.right} source={require("../../assets/images/setting.png")}></Image>,<Image style={styles.right} source={require("../../assets/images/message.png")}></Image>],
          color: '#fff',
          icon: <Image style={styles.icon} source={require("../../assets/images/nav4.png")}></Image>,
          iconActive: <Image style={styles.icon} source={require("../../assets/images/nav4_active.png")}></Image>,
          view:<PersonerView/>
      }]
    }
  }
  _initView(tab,i){
    return (
      <View key={'item'+i} style={[styles.container]}>
        <StatusBar
         key={'status' + i}
         animated={true}
         backgroundColor='rgba(0,0,0,0)'
         barStyle="default"
         networkActivityIndicatorVisible
         translucent={true}
        >
        </StatusBar>
        <Head tab={tab} key={'head'+i}></Head>
        <View style={[styles.container]} key={'view'+i}>
          {tab.view}
        </View>
      </View>
    )
  }
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <TabBar tab={this.state.tabs}/>}
        tabBarPosition='bottom'
        locked={false}
        initialPage={0}
        tabBarBackgroundColor={'#eee'}
        tabBarTextStyle={{fontSize:14,color:"#666"}}
        tabBarActiveTextColor={'#eb3d00'}
        prerenderingSiblingsNumber={1}
      >
        {this.state.tabs.map((tab,i)=>this._initView(tab,i))}
      </ScrollableTabView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width:72,
    height:72
  },
  right: {
    width:64,
    height:64
  }
});
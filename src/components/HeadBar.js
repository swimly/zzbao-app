import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  PixelRatio,
  StatusBar
} from 'react-native';
let PI=1/PixelRatio.get();
const BarHeight = StatusBar.currentHeight;
export default class TabView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: this.props.tab
    }
  }
  render() {
    return (
      <View style={[styles.navBar,{paddingTop: BarHeight,backgroundColor:this.state.item.background,paddingRight:10,paddingLeft:10,borderBottomWidth:1*PI,borderColor:'#E2E2E2'}]}>
        <View style={styles.container}>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize: 18,color:this.state.item.color}}>{this.state.item.title}</Text>
        </View>
        <View style={[styles.container,{justifyContent: 'flex-end',flexDirection: 'row'}]}>
          {this.state.item.right.map((item, i) => <TouchableNativeFeedback><View><Text style={{marginLeft:5}} key={i}>{item}</Text></View></TouchableNativeFeedback>)}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  navBar:{
    height:40 + BarHeight,
    flexDirection:"row",
    borderColor:"#ddd",
    justifyContent: 'center',
    alignItems: 'center'
  }
});
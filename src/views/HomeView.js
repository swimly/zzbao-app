import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Iconfont';
import Head from '../components/HeadBar';
import Swiper from 'react-native-swiper';
export default class HomeView extends Component {
  render() {
    var self = this
    return (
      <View style={[styles.container]}>
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={180}>
          <View style={styles.slide1}>
            <Image  source={require('../../assets/images/banner.png')}></Image>
          </View>
          <View style={styles.slide2}>
            <Image source={require('../../assets/images/banner.png')}></Image>
          </View>
          <View style={styles.slide3}>
            <Image source={require('../../assets/images/banner.png')}></Image>
          </View>
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
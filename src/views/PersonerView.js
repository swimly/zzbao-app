import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
export default class PersonerView extends Component {
  render() {
    var self = this
    return (
      <View style={[styles.container]}>
        <View style={[styles.userPanel, styles.rowCenter]}>
          <Text>刘勇</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  userPanel: {
    height: 120,
    backgroundColor:'#EB3D00'
  }
});
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import OfferItem from '../components/OfferItem'
import GiftedListView from 'react-native-gifted-listview'
export default class OfferView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  // _onFetch (page = 1, callback, options) {
  //   fetch('http://www.liuwbox.com/zzbao/app/insurance/company.htm',{
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res=>{
  //     res.json().then(res=>{
  //       console.log(res.data.companyList)
  //       this.setState({'list':res.data.companyList})
  //       console.log(this.state.list)
  //       callback(this.state.list)
  //     })
  //   })
  // }
  /**
   * Will be called when refreshing
   * Should be replaced by your own logic
   * @param {number} page Requested page to fetch
   * @param {function} callback Should pass the rows
   * @param {object} options Inform if first load
   */
  _onFetch(page = 1, callback, options) {
    fetch('http://www.liuwbox.com/zzbao/app/insurance/company.htm',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      res.json().then(res=>{
        console.log(res.data.companyList)
        if (page === 1) {
          callback(res.data.companyList, {
            allLoaded: true, // the end of the list is reached
          });
        } else {
          callback(res.data.companyList);
        }
      })
    })
  }


  /**
   * When a row is touched
   * @param {object} rowData Row data
   */
  _onPress(rowData) {
    console.log(rowData+' pressed');
  }

  /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderRowView(rowData) {
    return (
      <OfferItem data={rowData}>
      </OfferItem>
    );
  }
  render() {
    var self = this
    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: '#fff',
            },
          }}

          refreshableTintColor="blue"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    overflow:'scroll'
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
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    padding: 10,
    height: 44,
  }
});

// <ScrollView style={[styles.container]}>
//         {this.state.list.map((item,index) => <OfferItem data={item} key={index}></OfferItem>)}
//       </ScrollView>
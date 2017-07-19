import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableNativeFeedback,
    Image,
    PixelRatio
} from 'react-native';
let PI=1/PixelRatio.get();
// import Icon from 'react-native-vector-icons/Iconfont';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';
export default class TabBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tab:this.props.tab
        }
    }
    setAnimationValue({value}) {
        index=value
        index=String(index).split(".")[1]=="undefined"?"":String(index).split(".")[1];
        //console.log(index);
	}
    componentDidMount(){
        this.props.scrollValue.addListener(this.setAnimationValue);
    }
    _initTab(tab,index){
        let color = this.props.activeTab == index ? "#eb3d00" : "#9e9e9e";
        let icon = this.props.activeTab == index ? this.state.tab[index].iconActive : this.state.tab[index].icon;
        return(
            <Ripple
                onPress={()=>{this.props.goToPage(index)}}
                key={index}
                style={[styles.flex,styles.navItem]}
            >
                <View style={[styles.flex,styles.navItem]}>
                    <Text>{icon}</Text>
                    <Text style={[{color:color,fontSize:16}]}>{this.state.tab[index].name}</Text>
                </View>
            </Ripple>
        )
    }
    render(){
        return(
            <View style={[styles.navBar]}>
                {this.state.tab.map((tab,index)=>this._initTab(tab,index))}
            </View>
        )
    }
}
const styles = StyleSheet.create({
  flex:{
    flex:1
  },
  icon:{
    fontFamily:"iconfont",
    fontSize:14
  },
  navBar:{
    height:60,
    backgroundColor:"#FBFBFB",
    flexDirection:"row",
    borderColor:"#ddd",
    borderTopWidth:1*PI
  },
  navItem:{
    justifyContent:"center",
    alignItems:"center"
  }
});
import React,{Component} from 'react'
import {Text,View,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <ImageBackground source={require('../assets/stars.gif')}>
            <View 
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text style={{marginTop:-50,fontSize:26,fontWeight:'bold',color:'white'}}>Stellar App</Text>
                <View>
                <TouchableOpacity style={{borderRadius:2,width:100,height:50,backgroundColor:'white'}}
                onPress={()=>
                this.props.navigation.navigate('SpaceCrafts')
                }>
                    <Text style={{justifyContent:'center',alignItems:'center',color:'pink',fontSize:20}}>SpaceCrafts</Text>
                    <Image source={require('../assets/space_crafts.png')}
                           style={{width:80,height:80}}
                    />
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderRadius:2,width:100,height:50,backgroundColor:'white'}}
                onPress={()=>
                this.props.navigation.navigate('StarMap')
                }>
                    <Text style={{justifyContent:'center',alignItems:'center',color:'pink',fontSize:20}}>Star Map</Text>
                    <Image source={require('../assets/star_map.png')}
                           style={{width:80,height:80}}
                    />
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={{borderRadius:2,width:100,height:50,backgroundColor:'white'}}
                onPress={()=>
                this.props.navigation.navigate('DailyPic')
                }>
                    <Text style={{justifyContent:'center',alignItems:'center',color:'pink',fontSize:20}}>Daily Pictures</Text>
                    <Image source={require('../assets/daily_pictures.png')}
                           style={{width:80,height:80}}
                    />
                </TouchableOpacity>
                </View>

                
            </View>
            </ImageBackground>
        )
    }
}
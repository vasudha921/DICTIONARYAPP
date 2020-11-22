import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      text: '',
      displayText: ''
    }
  }
  render(){
    return(
      <View>
        <Header
          backgroundColor = 'yellow'
          centerComponent={{text: 'My Dictionary App',style: {color:'black', fontSize:20} }}
        />
        <TextInput 
        style = {styles.inputBox}
        onChangeText={(text)=>{
          this.setState({text:text, });
        }}
        value = {this.state.text}/>
        </View>
    )
  }
}

const styles  = StyleSheet.create({
  inputBox:{
    marginTop:265,
    width:'60%',
    alignSelf:'center',
    height:'12%',
    textAlign:'center',
    borderWidth:4,
    

  }
})
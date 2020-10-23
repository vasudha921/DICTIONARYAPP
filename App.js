
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  getWord=(word)=> {
    var searchKeyword=word.toLowerCase()
    var url = "https://rupinwhitehatjr.github.io/dictionary/"+ searchKeyword + "json"
    //console.log(url)
    return fetch(url)
    .then((data)=>{
      if(data.status=== 200){
        return data.json()
      }
      else{
        return null
      }
    })
  }
  .then((response)=>{
    //console.log(response)
    var responseObject = response
    //var word = responseObject.word
    //var lexicalCategory = responseObject.results[0].lexicalEntries[0].lexcialCategory.text
    if(responseObject)
    {
      var wordData = responseObject.definetion[0]
      //console.log(responseObject.definition[0])
      var definition = wordData.description
      var lexicalCategory = wordData.wordtype
      //console
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
      style = {styles.inputBox}
      onChangeText = {text => {this.setState ({
        text:text,
        isSearchPressed:false,
        word: "Loading ... ",
        lexicalCategory : '',
        examples: [],
        definetion: ""
      });
      }}
      value = {this.state.text}
      />
      <TouchableOpacity style = {styles.searchButton}
      onPress = {()=> {
        this.setState({isSearchPressed:true});
        this.getWord(this.state.text)
       }}>

       </TouchableOpacity>
        

        
    </View>
  );
    
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    marginTop: 100,
    width: '90 %',
    alignSelf: 'center',
    borderWidth: 2,
    outline: 'none',
  },

});

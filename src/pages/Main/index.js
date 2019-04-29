import React, { Component } from 'react'
import { Text, View , Image , TextInput , TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import api from "../../services/api"

import styles from './styles'
import logo from '../../assets/logo.png';


export default class Main extends Component {
  state = {
    newBox: ""
  };

  // async componentDidMount(){
  //  const box = await AsyncStorage.getItem('@CloneBox:box');

  //    if(box){
  //       this.props.navigation.navigate("Box");
  //   }else{
  //     this.props.navigation.navigate("Main");
  //   }
  // }

  handleNewBox = async () => {
     const response = await api.post("boxes", {
      title: this.state.newBox
    });

    await AsyncStorage.setItem('@CloneBox:box',response.data._id);

    this.props.navigation.navigate("Box");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo}/>
        <TextInput 
          style={styles.input}
          placeholder="Crie um Box"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.setState.newBox}
          onChangeText={text => this.setState({newBox : text})}
          ></TextInput>
          <TouchableOpacity onPress={this.handleNewBox} style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
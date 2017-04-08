/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Button
} from 'react-native';
import Overlay from 'react-native-modal-overlay';

export default class AwesomeProject extends Component {

  state = {modalVisible: false}

  showOverlay() {
    this.setState({modalVisible: true})
  }

  hideOverlay() {
    this.setState({modalVisible: false})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Example: react-native-modal-overlay
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu{'\n'}
        </Text>
        <Button
  onPress={this.showOverlay.bind(this)}
  title="Show Overlay"
  color="#841584"
/>

        <Overlay visible={this.state.modalVisible} closeOnTouchOutside animationType="fade"
            containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}} childrenWrapperStyle={{backgroundColor: '#eee'}} >
          <Text style={{fontWeight:'300', fontSize: 20}}>Some Overlay Heading</Text>
          <View style={{borderBottomWidth: 1, width: 100, paddingTop: 10}}></View>
          <Text style={{fontWeight:'300', fontSize: 16, paddingTop: 20, textAlign:'center'}}>Lorem ipsum dolor sit amet, quo te novum tritani maiestatis. At libris reformidans mel, et modo idque pericula sit, alienum appareat cu eos. At pri tota nulla consequuntur. Est te diam erant, eum no altera dolorem facilisis. Ad per facilisi pericula postulant, id his dicta facete, alii constituto at per. Ex his alia graece democritum.
</Text>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

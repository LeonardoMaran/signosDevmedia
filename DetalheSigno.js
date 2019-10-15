import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import signos from './signo.json';

export default class DetalhesSigno extends React.Component {
  render(){
      const {idSigno} = this.props;
    return (
      // Listando os signos
      <View style={styles.container}>
          <Text> DetalhesSigno</Text>
          <Text> {idSigno} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import signos from './signo.json';
import DetalhesSigno from './DetalheSigno'

export default class App extends React.Component {
  render(){
    return(<DetalhesSigno idSigno={1} />)
    return (
      // Listando os signos
      <View style={styles.container}>
        {signos.map((signo, key)=>
          (<Button key={key} title = {signo.nome} onPress = { () => console.log('Acertou mizeravi!')}/>))}
        
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

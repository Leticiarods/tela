import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

export default function Resultado(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.alinhamento}>Agora sim!! Você já sabe a quantidade aproximada de telhas que ira gastar.</Text>

      <Image
        source={require('./imagens/telhado_antigo.jpg')}
        style={styles.imagem}
      ></Image>

      <Text style={styles.texto}>Número A: {props.route.params.valorA}</Text>
      <Text style={styles.texto}>Número C: {props.route.params.valorC}</Text>

      <Text style={styles.texto}>Resultado: {props.route.params.resultado}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate("Tabela")}>
        <Text style={styles.botao2}>Tabela com calculos</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate("Tela Inicial")}>
        <Text style={styles.botao2}>Voltar a Tela Inicial</Text>
      </TouchableOpacity>
    </View>
  )
}


/***************************************************************/
/***************************************************************/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fffd4',
  },
  alinhamento: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 20,
    width: 300,
    color: '#000000',
    fontWeight: 'bold',
  },
  texto: {
    width: 250,
    fontSize: 20,
    backgroundColor: 'lightsteelblue',
    color: '#000000',
    borderColor: 'black', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Borda arredondada
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imagem: {
    resizeMode: 'contain',
    height: 175,
    width: 265,
    marginBottom: 15,
    borderColor: 'black', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 50, // Borda arredondada
  },
  botao: {
    justifyContent: 'center',
    marginTop: 10,
    width: 250,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'dodgerblue',
  },
  botao2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000'
  },
});
/***************************************************************/
/***************************************************************/
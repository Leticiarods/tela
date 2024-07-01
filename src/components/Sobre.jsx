import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Sobre(props) {
  return (
    <View style={styles.container}>

      <Image
        source={require('./imagens/calculo_de_telhados.jpg')}
        style={[styles.imagem, {width:270}]}
      ></Image>

      <View style={styles.alinhamento}>
        <Text style={styles.texto}>Sobre esse app:</Text>
        <Text></Text>
        <Text style={styles.texto}>Esse app foi feito por Letícia Rodrigues Godoi, portadora do RA: 2022012558, para a N2 da materia de Programação para dispositivos moveis.</Text>
        <Text></Text>
        <Text style={styles.texto}>O cálculo de telhas é feito para auxiliar construtores a cálcular quantas telhas irão precisar para fazer um telhado triangular, no estilo tradicional de antigamente com telhas de barro.</Text>
      </View>

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
    fontSize: 20,
    width: 350,
    padding: 10,
    borderColor: 'black', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Borda arredondada
  },
  texto: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imagem: {
    resizeMode: 'contain',
    height: 270,
    marginBottom: 5,
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
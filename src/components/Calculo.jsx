import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


export default function Calculo(props) {

  const [numA, setnumA] = useState('');
  const [numC, setnumC] = useState('');

  /* ******************************************************** */
  const calculo = () => {
    const areaT = parseFloat(numA) * parseFloat(numC) * 2;

    const areaI = parseFloat(areaT) * 1.02;

    const areaQ = parseFloat(areaI) * 15;

    const margem = parseFloat(areaQ) * 0.05;

    const resp = parseFloat(areaQ) + parseFloat(margem);

    const resultado = Math.round(resp);

    axios.post("https://mobile-xi-seven.vercel.app/quantidade",
      {
        "dadoa": numA,
        "dadoc": numC,
        "resultado": resultado,
      }
    );
    props.navigation.navigate("Resultado", { valorA: numA, valorC: numC, resultado: resultado });
  }
/* ******************************************************** */

  return (
    <View style={styles.container}>
      <Image
        source={require('./imagens/calculo_de_telhados_2.png')}
        style={[styles.imagem, {width: 350}]}
      ></Image>

      <Text style={styles.texto}>Digite o valor da metade da Largura:</Text>
      <TextInput
        style={styles.input}
        placeholder='digite aqui...'
        keyboardType="numeric"
        value={numA}
        onChangeText={(text) => { setnumA(text) }}
      />

      <Text style={styles.texto}>Digite o valor do Comprimento:</Text>
      <TextInput
        style={styles.input}
        placeholder='digite aqui...'
        keyboardType="numeric"
        value={numC}
        onChangeText={(text) => { setnumC(text) }}
      />

      <View>
        <TouchableOpacity
          style={styles.botao}
          onPress={calculo}>
          <Text style={styles.botao2}>Ver o resultado</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    textAlign: 'center',
    borderColor: 'black', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Borda arredondada
    width: 200,
  },
  texto: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  imagem: {
    resizeMode: 'contain',
    height: 245,
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
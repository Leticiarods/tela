import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


export default function Explicacao(props) {
    return (
        <View style={styles.container}>
            <Image
                source={require('./imagens/calculo_de_telhados.jpg')}
                style={[styles.imagem, { width: 300 }]}
            ></Image>

            <View>
                <Text style={styles.titulo}>Passos para Calcular a Quantidade de Telhas</Text>

                <Text style={styles.texto}>1. Calcular a Área do Telhado em Planta:</Text>
                <Text style={[styles.texto, styles.text1]}>
                    Área do retângulo: A × C{"\n"}
                    Como o telhado é de duas águas, multiplique por 2.{"\n"}
                    Fórmula: Área em planta = (A × C) × 2
                </Text>

                <Text style={styles.texto}>2. Calcular a Área Inclinada da Cobertura:</Text>
                <Text style={[styles.texto, styles.text1]}>
                    Multiplique a área em planta pelo fator de correção da inclinação.{"\n"}
                    Fórmula: Área inclinada = Área em planta × 1.02
                </Text>

                <Text style={styles.texto}>3. Calcular a Quantidade de Telhas:</Text>
                <Text style={[styles.texto, styles.text1]}>
                    Multiplique a área inclinada pela quantidade de telhas por metro quadrado.{"\n"}
                    Fórmula: Quantidade de telhas = Área inclinada × 15
                </Text>

                <Text style={styles.texto}>4. Adicionar 5% de Margem de Segurança:</Text>
                <Text style={[styles.texto, styles.text1]}>
                    Calcule 5% da quantidade de telhas e adicione ao total.{"\n"}
                    Fórmula: Total de telhas = Quantidade de telhas × 1.05
                </Text>

            </View>

            <View>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => props.navigation.navigate("Cálculo")}>
                    <Text style={styles.botao2}>Quero testar</Text>
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
    titulo: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
    },
    texto: {
        paddingLeft: 10,
        paddingRight: 10,
        color: '#000000',
        fontSize: 15,
    },
    text1: {
        paddingLeft: 30,
    },
    imagem: {
        resizeMode: 'contain',
        height: 300,
        marginBottom: 5,
        borderColor: 'black', // Cor da borda
        borderWidth: 1, // Largura da borda
        borderRadius: 50, // Borda arredondada
    },
    botao: {
        justifyContent: 'center',
        marginTop: 0,
        width: 250,
        height: 40,
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
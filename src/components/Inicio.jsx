import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Inicio(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.alinhamento}>Que tal calcular a quantidade de telhas que ira gastar em sua construção??</Text>

            <View>
                <Image
                    source={require('./imagens/telhado_antigo.jpg')}
                    style={styles.imagem}
                ></Image>
            </View>

            <View>
                <TouchableOpacity
                style={styles.botao}
                onPress={() => props.navigation.navigate("Explicacao")}>
                <Text style={styles.botao2}>Começar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.botao}
                onPress={() => props.navigation.navigate("Tabela")}>
                <Text style={styles.botao2}>Tabela com calculos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.botao}
                onPress={() => props.navigation.navigate("Sobre")}>
                <Text style={styles.botao2}>Sobre o app</Text>
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
    alinhamento: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 20,
        width: 300,
        color: '#000000',
        fontWeight: 'bold',
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
    imagem: {
        resizeMode: 'contain',
        height: 185,
        width: 280,
        marginBottom: 5,
        borderColor: 'black', // Cor da borda
        borderWidth: 1, // Largura da borda
        borderRadius: 50, // Borda arredondada
    },
});
/***************************************************************/
/***************************************************************/
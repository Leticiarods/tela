import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Tabela() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mobile-xi-seven.vercel.app/quantidade");
        setData(response.data);
      } catch (error) {
        setError("Erro ao obter dados");
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.dadoa}</Text>
      <Text style={styles.cell}>{item.dadoc}</Text>
      <Text style={styles.cell}>{item.resultado}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.headerCell}>Dado A</Text>
              <Text style={styles.headerCell}>Dado C</Text>
              <Text style={styles.headerCell}>Resultado</Text>
            </View>
          )}
        />
      )}

      <View>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => props.navigation.navigate("Tela Inicial")}>
          <Text style={styles.botao2}>Voltar a Tela Inicial</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fffd4',
  },
  header: {
    width: 300,
    borderColor: 'black', // Cor da borda
    borderWidth: 1, // Largura da borda
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    padding: 5,
  },
  headerCell: {
    width: 95,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  row: {
    borderColor: 'black', // Cor da borda
    borderWidth: 1, // Largura da borda
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  cell: {
    textAlign: 'center',
    flex: 1,
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  botao: {
    justifyContent: 'center',
    marginBottom: 10,
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

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Calculo from './src/components/Calculo';
import Sobre from './src/components/Sobre';
import Resultado from './src/components/Resultado';
import Inicio from './src/components/Inicio';
import Tabela from './src/components/Tabela';
import Explicacao from './src/components/Explicacao';

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <navStack.Navigator>

        <navStack.Screen name='Tela Inicial' component={Inicio} />
        <navStack.Screen name='Cálculo' component={Calculo} />
        <navStack.Screen name='Resultado' component={Resultado} />
        <navStack.Screen name='Sobre' component={Sobre} />
        <navStack.Screen name='Tabela' component={Tabela} />
        <navStack.Screen name='Explicacao' component={Explicacao} />

      </navStack.Navigator>
    </NavigationContainer>
  )
}
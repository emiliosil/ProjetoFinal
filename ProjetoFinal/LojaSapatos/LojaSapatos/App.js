import react from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createNativesStackNavigator } from '@react-navigation/native-stack';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Stack = createNativesStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen
                name="Home"
                component={Home}
                option={{
                    title: 'Bem Vindo ao App'
                }}
                />
                <Stack.Screen
                name="Sobre"
                component={Sobre}
                />
                <Stack.Screen
                name = "Contato"
                component={Contato}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
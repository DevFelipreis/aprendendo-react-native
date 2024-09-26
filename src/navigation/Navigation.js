import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Ajuste o caminho conforme necessário
import LoginScreen from '../screens/LoginScreen'; // Ajuste o caminho conforme necessário

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Tela inicial */}
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                {/* Tela de login */}
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

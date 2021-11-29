import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './app/navigation/RootStack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ButtonThemeProvider } from './app/context/ButtonThemeContext'


const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <ButtonThemeProvider>
                    <RootStack />
                </ButtonThemeProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;

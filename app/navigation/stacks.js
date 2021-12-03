import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Settings from '../screens/Settings/Settings';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return <Stack.Navigator>
        <Stack.Screen
            options={{
                headerShown: false,
            }}
            name={'HomeScreen'}
            component={Home}
        />
    </Stack.Navigator>
}

export const SettingsStack = () => {
    return <Stack.Navigator>
        <Stack.Screen
            options={{
                headerShown: false,
            }}
            name={'SettingsScreen'}
            component={Settings}
        />
    </Stack.Navigator>
}
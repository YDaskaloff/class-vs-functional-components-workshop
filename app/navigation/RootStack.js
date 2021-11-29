import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';


const RootStackNavigator = createNativeStackNavigator();

const RootStack = () => {
    return (
        <RootStackNavigator.Navigator>
            <RootStackNavigator.Screen
                options={{
                    headerShown: false,
                }}
                name={'Tabs'}
                component={Tabs}
            />
        </RootStackNavigator.Navigator>
    );


};
export default RootStack;
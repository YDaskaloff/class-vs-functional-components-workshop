import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, SettingsStack } from './stacks';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
        >
            <Tab.Screen
                name={"Home"}
                component={HomeStack}
            />
            <Tab.Screen
                name={"Settings"}
                component={SettingsStack}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
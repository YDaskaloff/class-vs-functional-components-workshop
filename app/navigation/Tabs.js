import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, SettingsStack } from './stacks';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'md-nutrition'
                            : 'md-nutrition-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-options' : 'ios-options-outline';   
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
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
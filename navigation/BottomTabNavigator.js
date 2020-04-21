import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CircuitScreen from '../screens/CircuitScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='home' />
                    ),
                }}
            />
            <BottomTab.Screen
                name='Circuit'
                component={CircuitScreen}
                options={{
                    title: 'Circuit',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='sync' />
                    ),
                }}
            />
            <BottomTab.Screen
                name='History'
                component={HistoryScreen}
                options={{
                    title: 'History',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='calendar' />
                    ),
                }}
            />
            <BottomTab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name='person' />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName =
        route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'Home';
        case 'History':
            return 'History';
        case 'Circuit':
            return 'Set up your circuit';
        case 'Profile':
            return 'Profile';
    }
}

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Calendar from './Calendar';
import RecentActivity from './RecentActivity';

export default function History() {
    return(
        <View>
            <Calendar />
            <RecentActivity />
        </View>
    )
}
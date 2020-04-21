import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';
import { Platform } from 'react-native';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={Platform.select({
        ios: `ios-${props.name}`,
        android: `md-${props.name}`
      })}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

import React from "react";
import { Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddButton(props) {
    return (
        <TouchableOpacity
            style={!props.bottomText ? styles.containerRow : styles.containerColumn}
            onPress={props.onPress}
            onLayout={props.onLayout}
        >
            <Ionicons
                name={Platform.select({
                    ios: `ios-${props.name}`,
                    android: `md-${props.name}`,
                })}
                size={props.size}
                style={{...styles.icon, color: props.color}}
            />
        {props.bottomText && <Text>{props.bottomText}</Text>}
        {props.rightText && <Text>{' '} {props.rightText}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerColumn: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    icon: {
        textAlign: 'center'
    }
    
})
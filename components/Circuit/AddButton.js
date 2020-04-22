import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddButton(props) {
    return (
        <View style={!props.bottomText ? styles.containerRow : styles.containerColumn}>
            <TouchableOpacity onPress={props.onPress}>
                <Ionicons
                    name={Platform.select({
                        ios: `ios-${props.name}`,
                        android: `md-${props.name}`,
                    })}
                    size={props.size}
                    style={styles.icon}
                />
            {props.bottomText && <Text>{props.bottomText}</Text>}
            </TouchableOpacity>
            {props.rightText && <Text>{' '} {props.rightText}</Text>}
        </View>
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
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function MyDate() {
    return <Text style={styles.topSectionSubTitle}> Fevrier 27</Text >
}

const styles = StyleSheet.create({
    topSectionSubTitle: {
        fontSize: 22,
        marginEnd: 3,
        color: 'red'
    },
});
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function Item(props) {

    const { data } = props;

    return (
        <View style={styles.itemContainer}>
            {
                (data.isFinished) ? (
                    <AntDesign name="checkcircle" size={40} color="green" />
                ) : (
                    <MaterialIcons name="radio-button-unchecked" size={50} color="gray" />
                )
            }
            <View style={styles.itemContainerContent}>
                <Text style={styles.itemContainerContentTitle}>{data.title}</Text>
                <View style={styles.itemContainerContentMetadata}>
                    <Text style={styles.metadata}>{data.time}</Text>
                    <Entypo name="dot-single" size={24} color="gray" />
                    <Text style={styles.metadata}>{data.location}</Text>
                    <Entypo name="dot-single" size={24} color="gray" />
                    <Text style={styles.metadata}>{data.frequency}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 15,
        elevation: 1,
        shadowColor: 'white',
        shadowOpacity: 0.1,
        borderWidth: 2,
        borderColor: '#fff'
    },
    itemContainerContent: {
        marginStart: 10
    },
    itemContainerContentMetadata: {
        flexDirection: 'row'
    },
    itemContainerContentTitle: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    metadata: {
        fontSize: 17,
        color: 'gray'
    },
});
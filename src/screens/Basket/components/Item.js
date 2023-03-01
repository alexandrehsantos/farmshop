import { FlatList, Image, StyleSheet, View } from 'react-native';

import DefaultText from "../../../components/DefaultText";
import React from "react";

export default function Item({ item: { name, image } }) {
    return <View style={styled.itemList}>
        <Image source={image} style={styled.image} />
        <DefaultText style={styled.name}>{name} </DefaultText>
    </View>
}

const styled = StyleSheet.create({
    itemList: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }

})
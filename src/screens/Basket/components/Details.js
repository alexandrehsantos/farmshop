import { Image, StyleSheet, View } from "react-native";

import DefaultText from "../../../components/DefaultText";
import React from "react";

export default function Details({name, farmName, logoFarm, description, price}) {
    return (<>
        <DefaultText style={style.name}>{name}</DefaultText>
        <View style={style.farm}>
            <Image source={logoFarm} style={style.farmImg} />
            <DefaultText style={style.farmName}>{farmName}</DefaultText>
        </View>
        <DefaultText style={style.description}>
            {description}
        </DefaultText>
        <DefaultText style={style.price}>{price}</DefaultText>
    </>);
}

const style = StyleSheet.create({
    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    farmImg: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontSerratRegular",
    },
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})
import { Dimensions, Image, StyleSheet, Text, View } from "react-native"

import DefaultText from "../../components/DefaultText.js";
import Details from "./components/Details.js";
import Header from "./components/Header.js";
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import logo from '../../../assets/logo.png'
import top from '../../../assets/topo.png';

function Basket({top, details}) {
    return <>
        <Header {...top} />

        <View style={style.basket}>
            <Details {...details} />
        </View>
    </>
}

const style = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default Basket;
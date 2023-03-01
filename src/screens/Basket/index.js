import { FlatList, ScrollView, StyleSheet, View } from "react-native"

import DefaultText from "../../components/DefaultText.js";
import DefautButton from './components/DefaultButton.js'
import Details from "./components/Details.js";
import Header from "./components/Header.js";
import Item from "./components/Item.js";

function Basket({ top, details, items }) {
    return <>
        <FlatList
            data={items.list}
            renderItem={Item}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={() => {
                return <>
                    <Header {...top} />
                    <View style={styled.basket}>
                        <Details {...details} />
                        <DefaultText style={styled.title}>{items.title}</DefaultText>
                    </View>
                </>
            }}
        />
    </>
}

const styled = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
});

export default Basket;
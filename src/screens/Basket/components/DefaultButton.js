import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function DefautButton({buttonName}) {
    return (
        <TouchableOpacity style={styled.buyButton} onPress={() => { }}>
            <Text style={styled.textBuyButton}>{buttonName}</Text>
        </TouchableOpacity >
    )
}

const styled = StyleSheet.create({
    buyButton: {
        marginTop: 16,
        backgroundColor: '#2A9F85', 
        borderRadius: 6,
        paddingVertical: 16,
        
    },
    textBuyButton: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26, 
        fontWeight: "bold",
    }
})
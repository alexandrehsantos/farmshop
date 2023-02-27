import { StyleSheet, Text } from "react-native";

export default function DefaultText({ children, style }) {
    let fontStyle = defaultTextStyle.regularFont;

    if (style?.fontWeight === 'bold') {
        fontStyle = defaultTextStyle.fontBold;
    }

    return (
        <Text style={[fontStyle, style]}> {children}</Text>
    );
}

const defaultTextStyle = StyleSheet.create({
    regularFont: {
        fontFamily: "MontSerratRegular",
        fontWeight: "normal",
    },

    fontBold: {
        fontFamily: "MontSerratBold",
        fontWeight: "normal",
    }
})
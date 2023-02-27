import { Dimensions, Image, StyleSheet } from 'react-native';

import DefaultText from '../../../components/DefaultText';
import top from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

function Header({ title }) {
    return (<>
        <Image source={top} style={style.imgHeader} />
        <DefaultText style={style.headerTitle}>{ title }</DefaultText>
    </>);
}

const style = StyleSheet.create({
    imgHeader: {
        width: "100%",
        height: 578 / 768 * width,

    },

    headerTitle: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        padding: 16,
        fontWeight: "bold",
    },

})

export default Header;
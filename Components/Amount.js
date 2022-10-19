import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font"

export default function Amount () {
    const [loaded] = useFonts({
        Montserrat: require('../assets/fonts/Silkscreen/Silkscreen-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.amountView}>
            <Text style={styles.amount}>
                <Text style={styles.amountSign}>R$</Text>
                <Text style={styles.amountIntegerValue}>129054,</Text>
                <Text style={styles.amountDecimalValue}>99</Text>
            </Text>
        </View>
    )
};

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    amountView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        width: width,
        minHeight: 110,
        padding: 20,
        fontFamily: 'Silkscreen-Regular',
    }, 
    amount: {
        flex: 1,
        textAlign: 'center',
        color: '#111119',
        fontFamily: 'Silkscreen-Regular',
        fontSize: 48,
        
        minWidth: '80%',

        borderBottomColor: '#111',
        borderBottomWidth: 3,
    },
    amountSign: {
        fontSize: 24,
        alignSelf: 'flex-start',
        fontFamily: 'Silkscreen-Regular',
        padding: 5,
    },
    amountIntegerValue: {
        fontSize: 48,
        padding: 5,
    },
    amountDecimalValue: {
        fontSize: 32,
    },
});
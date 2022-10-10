import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function Amount () {
    return (
        <View style={styles.amountView}>
            <Text style={styles.amount}>
                <Text style={styles.amountSign}>R$</Text>
                <Text style={styles.amountIntegerValue}>2000,</Text>
                <Text style={styles.amountDecimalValue}>00</Text>
            </Text>
        </View>
    )
};

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    amountView: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        width: width,
        minHeight: 110,
        padding: 20,
    }, 
    amount: {
        flex: 5,
        textAlign: 'center',
        color: '#111119',
        fontSize: 48,
    },
    amountSign: {
        fontSize: 24,
        alignSelf: 'flex-start',
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
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function Header (props) {
    return (
        <View style={styles.header}>
            <StatusBar hidden={true}/>
            <Text>Hi, Elias</Text>
        </View>
    )
};

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    header: {
        color: '#111119',
        alignSelf: 'stretch',
        width: width,
        height: 80,
        padding: 20,
        textAlign: 'center', 
    },
});
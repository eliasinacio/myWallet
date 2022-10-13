import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Amount from './Components/Amount';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />

      <Amount />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
  }
});

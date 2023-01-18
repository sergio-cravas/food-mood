import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All your favorite restaurants</Text>

      <Text style={styles.body}>Order from the best local restaurants with ease and on-demand delivery</Text>

      <Button title='Go' onPress={() => navigation.navigate('Home')} />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FF9D01',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
  },
  body: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    textAlign: 'center',
  },
});

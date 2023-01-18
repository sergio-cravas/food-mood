import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, Button, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}>Home</Text>

      <Button title='Go' onPress={() => navigation.navigate('OnBoarding')} />

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
});

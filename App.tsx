import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

  const App = (): JSX.Element => {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!!!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  let test:number = 1
  test = 2

  const testFunc = (): string => {
    return 'test'
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


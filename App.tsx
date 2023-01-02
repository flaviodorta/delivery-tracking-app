import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomersScreen from './screens/CustomersScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigatior';

export default function App() {
  return (
    // @ts-ignore
    // <CustomersScreen />
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
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

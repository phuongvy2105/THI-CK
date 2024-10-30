import { Text, SafeAreaView, StyleSheet, Provider } from 'react-native';
import screen1 from './Screen/screen1'
import screen2 from './Screen/screen2'
import screen3 from './Screen/screen3'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen1" component={screen1} />
        <Stack.Screen name="screen2" component={screen2} />
        <Stack.Screen name="screen3" component={screen3} />
      </Stack.Navigator>
    </NavigationContainer>
     </Provider>
  );
}

export default App;
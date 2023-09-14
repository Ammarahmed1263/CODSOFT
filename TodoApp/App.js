import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import TaskScreen from './screens/TaskScreen';
import { Provider } from 'react-redux';
import { Persistor, Store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Index() {
    return (
      <Provider store={Store}>
        <PersistGate persistor={Persistor}>
          <App />
        </PersistGate>
      </Provider>
    )
}

const Stack = createNativeStackNavigator();
export  function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Task' component={TaskScreen} options={styles.TaskScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  TaskScreen: {
    headerStyle: {
      backgroundColor: '#F07167'
    },
    headerTintColor: '#EEE'
  }
})


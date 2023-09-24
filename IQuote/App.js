import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet } from 'react-native';
import { StoreProvider } from './components/StoreProvider';
import Home from './screens/Home';
import Favorites from './screens/Favorites';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#222'/>
      <StoreProvider>
        <NavigationContainer>
            <Drawer.Navigator screenOptions={drawerStyles.options}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Favorites" component={Favorites} options={{title: 'My Quotes'}}/>
            </Drawer.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </>
  );
}

const drawerStyles = StyleSheet.create({
  options: {
    headerShown: false,
    drawerStyle: {
      backgroundColor:'#111',
    },
    drawerLabelStyle: {
      color: 'white',
    },
    drawerActiveBackgroundColor: '#00E5E5'
  }
})

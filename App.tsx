import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './reducer/store';
import GalleryScreen from './screens/GalleryScreen';
import ImageScreen from './screens/ImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
          />

          <Stack.Screen
            name="Image"
            component={ImageScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

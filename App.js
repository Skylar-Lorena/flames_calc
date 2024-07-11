import LoveCalculator from './components/LoveCalculator';
import WelcomeScreen from './screens/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="LoveCalculator" component={LoveCalculator}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}



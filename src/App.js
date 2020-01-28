import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// screen
import SignScreen from './screens/sign';
import LoginScreen from './screens/login';
import ForGotPassword from './screens/forgot_pass';

const TabStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Sign: {screen: SignScreen},
    ForGotPass: {screen: ForGotPassword},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default App = createAppContainer(TabStack);

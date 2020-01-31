import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// screen
import SignScreen from './screens/sign';
import LoginScreen from './screens/login';
import ForGotPassword from './screens/forgot_pass';
import ExploretScreen from './screens/explore';
import AccountScreen from './screens/account';
import CartScreen from './screens/cart';

const tabsBottom = createBottomTabNavigator({
  Explore: {screen: ExploretScreen},
  Cart: {screen: CartScreen},
  Account: {screen: AccountScreen},
});

const TabStack = createStackNavigator(
  {
    TabsBottom: {screen: tabsBottom},
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

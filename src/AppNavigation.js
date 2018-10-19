import { createStackNavigator } from 'react-navigation';
import Main from './screens';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: { header: null },
    },
  },
  {
    initialRouteName: 'Main',
  },
);

export default AppNavigator;

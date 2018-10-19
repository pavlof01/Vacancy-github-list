import { createStackNavigator } from 'react-navigation';
import Main from './screens';
import Job from './screens/job';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: { header: null },
    },
    Job: {
      screen: Job,      
    }
  },
  {
    initialRouteName: 'Main',
  },
);

export default AppNavigator;

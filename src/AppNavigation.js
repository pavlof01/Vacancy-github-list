import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createBottomBarOptions } from './components/bottomBar';
import Jobs from './screens/jobsScreen';
import Job from './screens/jobDetail';
import stackOverflow from './screens/stackOverflow';

const Main = createBottomTabNavigator({
  Jobs: {
    screen: Jobs,
    navigationOptions: createBottomBarOptions('Jobs'),
  },
  stackOverflow: {
    screen: stackOverflow,
    navigationOptions: createBottomBarOptions('StackOverflow'),
  },
  Profile: {
    screen: Jobs,
    navigationOptions: createBottomBarOptions('Jobs'),
  },  
});

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

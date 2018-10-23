import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createBottomBarOptions } from './components/bottomBar';
import Jobs from './screens/jobs';
import Job from './screens/jobDetail';
import StackOverflow from './screens/stackOverflow';
import Post from './screens/post';

const Main = createBottomTabNavigator({
  Jobs: {
    screen: Jobs,
    navigationOptions: createBottomBarOptions('Jobs'),
  },
  StackOverflow: {
    screen: StackOverflow,
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
    },
    Post: {
      screen: Post,      
    }
  },
  {
    initialRouteName: 'Main',
  },
);

export default AppNavigator;

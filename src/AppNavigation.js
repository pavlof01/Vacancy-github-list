import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createBottomBarOptions } from './components/bottomBar';
import Jobs from './screens/jobs';
import Job from './screens/jobDetail';
import StackOverflow from './screens/stackOverflow';
import Post from './screens/post';
import GitHubReps from './screens/ghReps';
import Rep from './screens/rep';

const Main = createBottomTabNavigator({
  Jobs: {
    screen: Jobs,
    navigationOptions: createBottomBarOptions('Jobs'),
  },
  StackOverflow: {
    screen: StackOverflow,
    navigationOptions: createBottomBarOptions('StackOverflow'),
  },
  GitHubRepositories: {
    screen: GitHubReps,
    navigationOptions: createBottomBarOptions('GHreps'),
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
    },
    Rep: {
      screen: Rep,      
    }
  },
  {
    initialRouteName: 'Main',
  },
);

export default AppNavigator;

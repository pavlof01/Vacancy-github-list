import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Api from './api';

export default class App extends Component {

  componentDidMount(){
    Api.getListOfGithubJobs('javascript', 'Washington');
  }
  
  render() {
    return (
      <View>
        <Text>еуые</Text>        
      </View>
    );
  }
}

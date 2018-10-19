import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobs';

class Main extends Component {
  componentDidMount() {    
    this.props.fetchJobs('javascript', 'boston');
  }

  render() {
    return (
      <View>
        <Text>еуые</Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: (description, location) => dispatch(fetchJobs(description, location)),
});

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

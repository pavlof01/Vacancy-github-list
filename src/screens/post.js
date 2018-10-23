import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: '900',
  },
  companyName: {
    fontSize: 15,
    fontWeight: '500',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});

class Job extends Component {
  constructor() {
    super();
    this.state = {};
  }

  keyExtractor = job => job.id;

  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>          
          <Text>POST</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Job;

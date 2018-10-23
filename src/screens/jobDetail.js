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

  render() {
    const { params } = this.props.navigation.state;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={{ uri: params.job.company_logo }}
          />
          <Text style={styles.title}>{params.job.title}</Text>
          <Text style={styles.companyName}>Company: {params.job.company}</Text>
          <Text style={styles.baseText}>Location: {params.job.location}</Text>
          <Text style={styles.baseText}>Type: {params.job.type}</Text>
          <View>
            <Text>{params.job.description}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Job;

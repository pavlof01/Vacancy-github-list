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

class Post extends Component {
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
            source={{ uri: params.post.owner.profile_image }}
          />
          <Text style={styles.title}>{params.post.title}</Text>
          <Text style={styles.companyName}>Name: {params.post.owner.display_name}</Text>
          <Text style={styles.baseText}>reputation: {params.post.owner.reputation}</Text>          
          <View>
            <Text>{params.post.body}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Post;

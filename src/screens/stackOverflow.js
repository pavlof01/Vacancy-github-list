import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  RefreshControl,  
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/sfPosts';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  listContainer: {
    margin: 10,
  },
  form: {
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  renderItemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    flexDirection:'row'
  },
  userContainer: {
    alignItems: 'center',
    flex:1
  },
  body: {
    flex:3
  },  
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  avatar: {
    width:50,
    height:50,
    resizeMode: 'contain'
  },
  companyName: {
    fontSize: 15,    
    textAlign:'center'
  },
  btn: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    backgroundColor: 'grey',
    width: '100%',
    textAlign: 'center',
    padding: 10,
    color: '#fff',
  },
});

class Posts extends Component {
  constructor() {
    super();
    this.state = {      
    };
  }
  componentDidMount() {
    this.props.fetchPosts();
  } 

  onRefresh = () => {    
    const { fetchPosts } = this.props;
    fetchPosts();
  };  

  renderItem = post => {
    const { item } = post;
    console.warn(JSON.stringify(item, null, 2));
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Job', { post: item })}>
        <View style={styles.renderItemContainer}>          
          <View style={styles.userContainer}>            
            <Image style={styles.avatar} source={{uri:item.owner.profile_image}} />
            <Text style={styles.companyName}>{item.owner.display_name}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>{item.title}</Text>   
          </View>                 
        </View>
      </TouchableOpacity>
    );
  };

  keyExtractor = post => post.owner.user_id;

  render() {
    const { refresh, postList } = this.props;    
    return (
      <SafeAreaView style={styles.safeAreaView}>        
        <FlatList
          extraData={[this.props]}
          contentContainerStyle={styles.listContainer}
          data={postList}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={this.onRefresh} />}
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

const mapStateToProps = state => ({  
  postList: state.posts.get('items').toJS(),
  refresh: state.posts.get('isFetching'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchReps } from '../actions/ghReps';

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
    flexDirection: 'row',
  },
  userContainer: {
    alignItems: 'center',
    flex: 1,
  },
  body: {
    flex: 3,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 15,
    textAlign: 'center',
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

class Rep extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchReps();
  }

  onRefresh = () => {
    const { fetchReps } = this.props;
    fetchReps();
  };

  routeToPost = rep => {
    Alert.alert(
      'Перейти к репозиторию?',
      '',
      [
        { text: 'Отмена', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.props.navigation.navigate('Rep', { rep }) },
      ],
      { cancelable: false },
    );
  };

  renderItem = rep => {
    const { item } = rep;
    return (
      <TouchableOpacity onPress={() => this.routeToPost(item)}>
        <View style={styles.renderItemContainer}>
          <View style={styles.userContainer}>
            <Image style={styles.avatar} source={{ uri: item.owner.avatar_url }} />
            <Text style={styles.companyName}>{item.owner.login}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  keyExtractor = rep => rep.id;

  render() {
    const { refresh, repsList } = this.props;
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          extraData={[this.props]}
          contentContainerStyle={styles.listContainer}
          data={repsList}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={this.onRefresh} />}
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchReps: () => dispatch(fetchReps()),
});

const mapStateToProps = state => ({
  repsList: state.reps.get('items').toJS(),
  refresh: state.reps.get('isFetching'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rep);

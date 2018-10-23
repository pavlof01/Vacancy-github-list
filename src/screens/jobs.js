import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/jobs';

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
  },
  title: {
    fontSize: 17,
    fontWeight: '900',
  },
  companyName: {
    fontSize: 15,
    fontWeight: '500',
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

class Main extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
      location: '',
    };
  }
  componentDidMount() {
    this.props.fetchJobs('javascript');
  }

  search = () => {
    const { description, location } = this.state;
    const { fetchJobs } = this.props;
    fetchJobs(description, location);
  };

  onRefresh = () => {
    const { description, location } = this.state;
    const { fetchJobs } = this.props;
    fetchJobs(description, location);
  };

  renderItem = job => {    
    const { item } = job;
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Job', { job:item })}>
        <View style={styles.renderItemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.companyName}>Company: {item.company}</Text>
          <Text style={styles.baseText}>Location: {item.location}</Text>
          <Text style={styles.baseText}>Type: {item.type}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  keyExtractor = job => job.id;

  render() {
    const { jobList, refresh } = this.props;    
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.form}>
          <TextInput
            onChangeText={description => this.setState({ description })}
            style={styles.textInput}
            placeholder="description"
          />
          <TextInput
            onChangeText={location => this.setState({ location })}
            style={styles.textInput}
            placeholder="location"
          />
          <TouchableOpacity onPress={this.search} style={styles.btn}>
            <Text style={styles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          extraData={[this.props]}
          contentContainerStyle={styles.listContainer}
          data={jobList}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={this.onRefresh} />}
        />
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: (description, location) => dispatch(fetchJobs(description, location)),
});

const mapStateToProps = state => ({
  jobList: state.jobs.get('items').toJS(),
  refresh: state.jobs.get('isFetching'),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

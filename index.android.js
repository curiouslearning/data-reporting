
import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

import JsonAPI from './jsonAPI';
import asynctesting from './asynctesting';

let Firebase = require('firebase');


class intentTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: '',
    }

    this.onPressSection = this.onPressSection.bind(this);
    this.onPressTouch = this.onPressTouch.bind(this);
    this.onPressReportScore = this.onPressReportScore.bind(this);
    this.onPressReportResponse = this.onPressReportResponse.bind(this);
    this.onPressGetData = this.onPressGetData.bind(this);

  }

  componentWillMount () {
    fetch('http://10.0.3.2:3000/')
    .then((response) => {
      console.log(`HEEEHEHEHEH response = ${JSON.stringify(response)}`);
    });
  }

  componentDidMount() {

  }

  componentDidMount() {

  }

  onPressTouch () {
    // ADD ENDPOINT TESTS
    // this.refs.jsonAPI.reportTouch('id1', 'id2', 'id3', 'time');
  }

  onPressSection () {
    // ADD ENDPOINT TESTS
    // this.refs.jsonAPI.reportSection('id1', 'id2', 'timeEntered', 'timeIn');
  }

  onPressReportScore () {
    // ADD ENDPOINT TESTS
    // this.refs.jsonAPI.reportScore('id1', 'id2', 'id3', 'time',
    //   'itemSelected', ['foil1', 'foil2', 'foil3'], 'score', 'minscore', 'maxscore');
  }

  onPressReportResponse () {
    this.refs.jsonAPI.reportResponse('id1', 'id2', 'id3', 'time',
      'itemSelected', ['foil1', 'foil2', 'foil3'], 'score', 'minscore', 'maxscore');

  }

  onPressGetData () {
    this.refs.jsonAPI.getData();
  }

  getRequest () {

    fetch('http://10.0.3.2:3000/')
    .then((response) => {
      console.log(`HEEEHEHEHEH response = ${JSON.stringify(response)}`);
      this.setState({response: JSON.stringify(response)});
    });

  }

  postRequest () {
    ///api/curious/
    fetch('http://10.0.3.2:3000/api/curious/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Curious',
        password: 'Learner',
      })
    })
    .then((response) => {
      console.log(`HEEEHEHEHEH response = ${JSON.stringify(response)}`);
      this.setState({response: JSON.stringify(response)});
    });
  }

  storeData () {
    let v = asynctesting.storeSection(["appy","3","12","20"]);
    this.setState({response: JSON.stringify(v)});
  }

  retrieveData () {
      AsyncStorage.getItem('@Section:2',(err,result) => { //removeItem not working, getItem works fine
      this.setState({response: JSON.stringify(result)});
    });
  }

    clearData () {
      AsyncStorage.clear();
    }

    //   if (value !== null){
    //     // We have data!!
    //     this.setState({response: JSON.stringify(value)});
    //   }
    // } catch (error) {
    //   this.setState({response: "null :c"});
    // }



  render() {

    return (
      <View style={styles.container}>

        <View
          style={styles.buttonView}
          >
        <Button
          color="#841584"
          title={"GET Request"}
          onPress={() => this.getRequest()}
        />
      </View>

        <Button
          title={"POST Request"}
          onPress={() => this.postRequest()}
        />
        <Button
          title={"Store Data"}
          onPress={() => this.storeData()}
        />
        <Button
          title={"Retrieve Stored Data"}
          onPress={() => this.retrieveData()}
        />
        <Button
          title={"Clear Stored Data"}
          onPress={() => this.clearData()}
        />

      <Text
        style={styles.text}
        >{this.state.response}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonView: {
    marginBottom: 20,
  },
});

AppRegistry.registerComponent('intentTest', () => intentTest);

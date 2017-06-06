
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

import JsonAPI from './jsonAPI';

let Firebase = require('firebase');

class intentTest extends Component {

  constructor(props) {
    super(props);

    this.onPressSection = this.onPressSection.bind(this);
    this.onPressTouch = this.onPressTouch.bind(this);
    this.onPressReportScore = this.onPressReportScore.bind(this);
    this.onPressReportResponse = this.onPressReportResponse.bind(this);

  }

  componentWillMount () {
    console.warn("sfadf");
    fetch('http://10.0.3.2:3000/')
    .then((response) => {
      console.warn(`HEEEHEHEHEH response = ${JSON.stringify(response)}`);
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
    // this.refs.jsonAPI.reportResponse('id1', 'id2', 'id3', 'time',
    //   'itemSelected', ['foil1', 'foil2', 'foil3'], 'score', 'minscore', 'maxscore');
  }


  render() {

    return (
      <View style={styles.container}>
        <JsonAPI
          ref={'jsonAPI'}/>

        <TouchableOpacity onPress={this.onPressTouch}>
          <Text>CLICK HERE for reportTouch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressSection}>
          <Text>CLICK HERE for reportSection</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressReportScore}>
          <Text>CLICK HERE for reportScore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPressReportResponse}>
          <Text>CLICK HERE for reportResponse</Text>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('intentTest', () => intentTest);

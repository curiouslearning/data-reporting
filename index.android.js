
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

import SendIntentAndroid from 'react-native-send-intent';
import JsonAPI from './jsonAPI';

let Firebase = require('firebase');

let IntentTestModule = NativeModules.IntentTest;

class intentTest extends Component {

  constructor(props) {
    super(props);

    this.onPressSection = this.onPressSection.bind(this);
    this.onPressTouch = this.onPressTouch.bind(this);
    this.onPressReportScore = this.onPressReportScore.bind(this);
    this.onPressReportResponse = this.onPressReportResponse.bind(this);



    var config = Firebase.initializeApp({
       apiKey: "AIzaSyBtd19osk7iO_3P5f822KiGStRh2FIhvug",
       authDomain: "react-native-test-f147b.firebaseapp.com",
       databaseURL: "https://react-native-test-f147b.firebaseio.com",
       projectId: "react-native-test-f147b",
       storageBucket: "react-native-test-f147b.appspot.com",
       messagingSenderId: "1014847812995"
   });

   var database = Firebase.database();
  }



  // componentDidMount() {
  //
  //   this.signup('kraharwood@gmail.com', 'password');
  //   // this.setUserMobile('XRVHSYV502P3AQmISXIWnDbRsPC3', '207233705dfgs');
  // }

  // signup(email, pass) {
  //   try {
  //       Firebase.auth()
  //           .createUserWithEmailAndPassword(email, pass);
  //       console.warn("Account created");
  //   } catch (error) {
  //       console.warn(error.toString())
  //   }
  // }
  //
  // setUserMobile(userId, mobile) {
  //     let userMobilePath = "/user/" + userId + "/details";
  //     return Firebase.database().ref(userMobilePath).set({
  //         mobile: mobile
  //     })
  // }
  //
  // setOtherInfo(userId, info) {
  //   let userInfoPath = "/user/" + userId;
  //   return Firebase.database().ref(userInfoPath).set({info: info})
  // }

  // sendIntent() {
  //   SendIntentAndroid.openCalendar();
  // }


  componentDidMount() {
    // this.signup('kraharwood@gmail.com', 'password');
    // this.setOtherInfo('NgEimJHDRidf3Q9CQhJqlcxUEif2', 'hellooooo');
    // this.setUserMobile('NgEimJHDRidf3Q9CQhJqlcxUEif2', '2072337056');
    // IntentTestModule.sendLog("Kate", "PLSWORK");
  }

  onPressTouch () {
    this.refs.jsonAPI.reportTouch('id1', 'id2', 'id3', 'time');
  }

  onPressSection () {
    this.refs.jsonAPI.reportSection('id1', 'id2', 'timeEntered', 'timeIn');
  }

  onPressReportScore () {
    this.refs.jsonAPI.reportScore('id1', 'id2', 'id3', 'time',
      'itemSelected', ['foil1', 'foil2', 'foil3'], 'score', 'minscore', 'maxscore');
  }

  onPressReportResponse () {
    this.refs.jsonAPI.reportResponse('id1', 'id2', 'id3', 'time',
      'itemSelected', ['foil1', 'foil2', 'foil3'], 'score', 'minscore', 'maxscore');
  }


  render() {

    // SendIntentAndroid.sendMail("kraharwood@gmail.com", "Test", "test body");
    // SendIntentAndroid.openCalendar();
    // if(SendIntentAndroid.openApp('cm.google.android.apps.photos')) { console.warn('yup');}
    // SendIntentAndroid.openChooserWithOptions({
    //     subject: 'Story Title',
    //     text: 'Message Body'
    //   }, 'Share Story');

    // SendIntentAndroid.openMaps('Piccadilly Circus Station, London, United Kingdom');

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

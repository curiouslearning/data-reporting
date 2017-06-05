import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class JsonAPI extends Component {

  constructor(props) {
    super(props);
  }

  reportSection (appID, secID, timeEntered, totalTime) {
    this.reportData( "{“key”:IN_APP_SECTION, “value”:{app_ID :" + appID + ", “section_ID”  :" + secID + ", “Time_enter_section” :" + timeEntered + ", “Time_in_section” :" + totalTime + "}}");
  }

  reportScore (appID, secID, timeStamp, item, foilList, score, minScore, maxScore) {
    this.reportData("{“key”:IN_APP_SCORE, “value”:{“app_ID” :" + appID + ", “section_ID”  :" + secID + ", “Time_stamp” :" + timeStamp + ", “Item_selected” :" + item + ", “Foil_list” :" + foilList + ", “score” :" + score + ", “min_score_possible” :" + minScore + ", “max_score_possible” :" + maxScore +"}}");
  }

  reportTouch (appID, secID, timeStamp, objID) {
    this.reportData("{“key”:IN_APP_TOUCH, “value”:{app_ID :" + appID + ", “section_ID”  :" + secID + ", “Time_stamp” :" + timeStamp + ", “object_ID” :" + objID + "}}");
  }

  reportResponse (appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue) {
    this.reportData("{“key”:IN_APP_RESPONSE, “value”:{“app_ID” :" + appID + ", “section_ID”  :" + secID + ", “Response_ID” :" + responseID + ", “Time_stamp” :" + timeStamp + ", “Item_selected” :" + item + ", “Foil_list” :" + foilList + ", “response_time” :" + responseTime + ", “response_value” :" + responseValue +"}}");
  }

  reportData (JSONBlob) {
    // this test endpoint needs to be changed every 48 hours
    fetch('http://requestb.in/17ljt931', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSONBlob, // not sure exactly how the data should appear when sent, but here's the idea
    })
    .then((data) => console.warn(`data = ${JSON.stringify(data)}`));
  }



  componentDidMount () {
  }




  render() {
    return (
      <View style={styles.container}>
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

export default JsonAPI;

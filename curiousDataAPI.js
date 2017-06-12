"use strict";

import {
  AsyncStorage,
} from 'react-native';

const sectionNum = 0;
const scoreNum = 0;
const touchNum = 0;
const responseNum = 0;

const section = "@Section";
const score = "@Score";
const touch = "@Touch";
const repsonse = "@Response";

const KEYS = [];

const reportSection = function (appID, secID, timeEntered, totalTime) {
  const value = {
    key: 'IN_APP_SECTION',
    value:  {
      app_ID: appID,
      section_ID: secID,
      Time_enter_section: timeEntered,
      Time_in_section: totalTime,
    }
  };
  let key = section.concat(":",sectionNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
      //error handling
    }
    sectionNum++;
    KEYS = KEYS.concat(key);
    return key;
    }

const reportScore = function (appID, secID, timeStamp, item, foilList, score, minScore, maxScore) {
  const value = {
    key: 'IN_APP_SCORE',
    value:  {
      app_ID: appID,
      section_ID: secID,
      Time_stamp: timeStamp,
      Item_selected: item,
      Foil_list: foilList,
      score: score,
      min_score_possible: minScore,
      max_score_possible: maxScore,
    }
  };
  let key = score.concat(":",scoreNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
      //error handling
    }
    scoreNum++;
    KEYS = KEYS.concat(key);
    return key;
    }

const reportTouch = function (appID, secID, timeStamp, objID) {
  const value = {
    key: 'IN_APP_TOUCH',
    value:  {
      app_ID: appID,
      section_ID: secID,
      Time_stamp: timeStamp,
      object_ID: objID,
    }
  };
  let key = touch.concat(":",touchNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
      //error handling
    }
    touchNum++;
    KEYS = KEYS.concat(key);
    return key;
    }

const reportResponse = function (appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue) {
  const value = {
    key: 'IN_APP_RESPONSE',
    value:  {
      app_ID: appID,
      section_ID: secID,
      Response_ID: responseID,
      Time_stamp: timeStamp,
      Item_selected: item,
      Foil_list: foilList,
      response_time: responseTime,
      response_value: responseValue,
    }
  };
  let key = response.concat(":",responseNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
      //error handling
    }
    responseNum++;
    KEYS = KEYS.concat(key);
    return key;
    }


const postToServer = async function (value, url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
  });
  const ok = await response.ok;
  //console.warn(await response.json());
  console.warn(ok);
  return ok;
  // .then(function(response) {
  //   console.warn(response.ok);
  //   return response.ok;
  // })
  // .catch(function(error) {
  //   console.log(error);
  // });
}

const postAllToServer = function (url) {
  let i = 0;
  let l = KEYS.length;
  for (; i < l; i++) {
    let x = KEYS.pop();
    let value = AsyncStorage.getItem(x);
    AsyncStorage.removeItem(x);
    postToServer(value,url);

  }
}

const showKEYS = function () {
  return KEYS.toString();
}

const collectionAPI = {
  reportSection,
  reportScore,
  reportTouch,
  reportResponse,
  postToServer,
  postAllToServer,
  showKEYS,
}

export default collectionAPI;

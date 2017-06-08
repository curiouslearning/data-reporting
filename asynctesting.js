import {
  AsyncStorage,
} from 'react-native';

import jsonAPI from './jsonAPI';

const sectionNum = 0;
const scoreNum = 0;
const touchNum = 0;
const responseNum = 0;

const section = "@Section";
const score = "@Score";
const touch = "@Touch";
const repsonse = "@Response";


function storeSection (appID, secID, timeEntered, totalTime) {
  let obj = jsonAPI.createJSONSection(appID,secID,timeEntered,totalTime);
  let key = section.concat(":",sectionNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      //error
    }
    sectionNum++;
    return key; //TODO: this value needs to be returned
}

function storeScore (appID, secID, timeStamp, item, foilList, score, minScore, maxScore) {
  let obj = jsonAPI.createJSONScore(appID, secID, timeStamp, item, foilList, score, minScore, maxScore);
  let key = score.concat(":",scoreNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.warn("yo");
    }
    scoreNum++;
    //return key.concat("___",JSON.stringify(obj));
    return key;
}

function storeTouch (appID, secID, timeStamp, objID) {
  let obj = jsonAPI.createJSONTouch(appID, secID, timeStamp, objID);
  let key = touch.concat(":",touchNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.warn("yo");
    }
    touchNum++;
    //return key.concat("___",JSON.stringify(obj));
    return key;
}

function storeResponse (appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue) {
  let obj = jsonAPI.createJSONResponse(appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue);
  let key = response.concat(":",responseNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.warn("yo");
    }
    responseNum++;
    //return key.concat("___",JSON.stringify(obj));
    return key;
}

// look into checking storage space


export default {
  storeSection,
  storeScore,
  storeTouch,
  storeResponse,
};

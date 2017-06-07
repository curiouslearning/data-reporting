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


async function storeSection (appID, secID, timeEntered, totalTime) {
  let obj = `{“key”:IN_APP_SECTION, “value”:{app_ID : ${appID}, “section_ID” : ${secID}, “Time_enter_section” : ${timeEntered}, “Time_in_section” : ${totalTime}}}`
  let key = section.concat(":",sectionNum.toString());
  try {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.warn("yo");
    }
    console.warn("heck");
    sectionNum++;
    return key; //TODO: this value needs to be returned
}

async function storeScore (appID, secID, timeStamp, item, foilList, score, minScore, maxScore) {
  let obj = `{“key”:IN_APP_SCORE, “value”:{“app_ID” : ${appID}, “section_ID”  : ${secID}, “Time_stamp” : ${timeStamp}, “Item_selected” : ${item}, “Foil_list” : ${foilList}, “score” : ${score}, “min_score_possible” : ${minScore}, “max_score_possible” : ${maxScore}}}`
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

async function storeTouch (appID, secID, timeStamp, objID) {
  let obj = `{“key”:IN_APP_TOUCH, “value”:{app_ID : ${appID}, “section_ID”  : ${secID}, “Time_stamp” : ${timeStamp}, “object_ID” : ${objID}}}`
  let key = touch.concat(":",touchNum.toString());
  try {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.warn("yo");
    }
    touchNum++;
    //return key.concat("___",JSON.stringify(obj));
    return key;
}

async function storeResponse (appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue) {
  let obj = `{“key”:IN_APP_RESPONSE, “value”:{“app_ID” : ${appID}, “section_ID”  : ${secID}, “Response_ID” : ${responseID}, “Time_stamp” : ${timeStamp}, “Item_selected” : ${item}, “Foil_list” : ${foilList}, “response_time” : ${responseTime}, “response_value” : ${responseValue}}}`
  let key = response.concat(":",responseNum.toString());
  try {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
      console.warn("yo");
    }
    responseNum++;
    //return key.concat("___",JSON.stringify(obj));
    return key;
}


export default {
  storeSection,
  storeScore,
  storeTouch,
  storeResponse,
};

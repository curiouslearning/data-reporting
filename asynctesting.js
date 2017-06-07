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
    let obj = {
      key: "IN_APP_SECTION",
      value: {
        app_ID: appID,
        section_ID: secID,
        Time_enter_section: timeEntered,
        Time_in_section: totalTime,
      }
    }
    let key = section.concat(":",sectionNum.toString());
    try {
      await AsyncStorage.setItem(key, JSON.stringify(obj));
    } catch (error) {
       console.warn("yo");
     }
     sectionNum++;
     return key.concat("___",JSON.stringify(obj));
  }





export default {
  storeSection,
};

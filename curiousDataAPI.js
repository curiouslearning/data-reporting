"use strict";

const reportSection = function (appID, secID, timeEntered, totalTime) {
  const value = {
    key: appID,
    value: secID,
    time: timeEntered,
    totalTime: totalTime,
  };
  return postToServer(value, 'http://10.0.3.2:3000/api/curious/');
  // this.reportData(JSON.stringify(value));
  // this.reportData( `{“key”:IN_APP_SECTION, “value”:{app_ID :" + appID + ", “section_ID”  :" + secID + ", “Time_enter_section” :" + timeEntered + ", “Time_in_section” :" + totalTime + "}}`);
}
// 
// reportScore (appID, secID, timeStamp, item, foilList, score, minScore, maxScore) {
//   // this.reportData(`{“key”:IN_APP_SCORE, “value”:{“app_ID” :" + appID + ", “section_ID”  :" + secID + ", “Time_stamp” :" + timeStamp + ", “Item_selected” :" + item + ", “Foil_list” :" + foilList + ", “score” :" + score + ", “min_score_possible” :" + minScore + ", “max_score_possible” :" + maxScore +"}}`);
// }
// 
// reportTouch (appID, secID, timeStamp, objID) {
//   // this.reportData(`{“key”:IN_APP_TOUCH, “value”:{app_ID :" + appID + ", “section_ID”  :" + secID + ", “Time_stamp” :" + timeStamp + ", “object_ID” :" + objID + "}}`);
// }
// 
// reportResponse (appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue) {
//   // this.reportData(`{“key”:IN_APP_RESPONSE, “value”:{“app_ID” :" + appID + ", “section_ID”  :" + secID + ", “Response_ID” :" + responseID + ", “Time_stamp” :" + timeStamp + ", “Item_selected” :" + item + ", “Foil_list” :" + foilList + ", “response_time” :" + responseTime + ", “response_value” :" + responseValue +"}}`);
// }

const postToServer = function (value, url) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value)
  });
}

const collectionAPI = {
  reportSection,
}

export default collectionAPI;

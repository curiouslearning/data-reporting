

  function createJSONSection (appID, secID, timeEntered, totalTime) {
    let json = `{“key”:IN_APP_SECTION, “value”:{app_ID : ${appID}, “section_ID” : ${secID}, “Time_enter_section” : ${timeEntered}, “Time_in_section” : ${totalTime}}}`;
    return json;
  }

  function createJSONScore (appID, secID, timeStamp, item, foilList, score, minScore, maxScore) {
    let json = `{“key”:IN_APP_SCORE, “value”:{“app_ID” : ${appID}, “section_ID”  : ${secID}, “Time_stamp” : ${timeStamp}, “Item_selected” : ${item}, “Foil_list” : ${foilList}, “score” : ${score}, “min_score_possible” : ${minScore}, “max_score_possible” : ${maxScore}}}`;
    return json;
  }

  function createJSONTouch (appID, secID, timeStamp, objID) {
    let json = `{“key”:IN_APP_TOUCH, “value”:{app_ID : ${appID}, “section_ID”  : ${secID}, “Time_stamp” : ${timeStamp}, “object_ID” : ${objID}}}`;
    return json;
  }

  function createJSONResponse (appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue) {
    let json = `{“key”:IN_APP_RESPONSE, “value”:{“app_ID” : ${appID}, “section_ID”  : ${secID}, “Response_ID” : ${responseID}, “Time_stamp” : ${timeStamp}, “Item_selected” : ${item}, “Foil_list” : ${foilList}, “response_time” : ${responseTime}, “response_value” : ${responseValue}}}`;
    return json;
  }

  export default {
    createJSONSection,
    createJSONScore,
    createJSONTouch,
    createJSONResponse,
  };

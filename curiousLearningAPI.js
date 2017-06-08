'use strict'



import JsonAPI from './jsonAPI';
import asynctesting from './asynctesting';

reportSection (appID, secID, timeEntered, totalTime) {
  let blob = jsonAPI.createJSONSection(appID, secID, timeEntered, totalTime);
  
}

reportScore (appID, secID, timeStamp, item, foilList, score, minScore, maxScore) {
  let blob = jsonAPI.createJSONScore(appID, secID, timeStamp, item, foilList, score, minScore, maxScore);
}

reportTouch (appID, secID, timeStamp, objID) {
  let blob = jsonAPI.createJSONTouch(appID, secID, timeStamp, objID);
}

createJSONResponse (appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue) {
  let blob = jsonAPI.createJSONResponse(appID, secID, responseID, timeStamp, item, foilList, responseTime, responseValue);
}

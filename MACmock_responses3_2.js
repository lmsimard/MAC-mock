//this is the code used in a Google Apps Script that the 3.2 version's code uses

function doGet(e = { parameter: {} }) {
  const sheet = SpreadsheetApp
    .openById("1g1EtjZEZH0Ahy_srABgM08HI03PrPXroFNoO58UzDMs")
    .getSheetByName("Sheet1");

  const userID = e.parameter.userID || "";
  const score = e.parameter.score || "";
  const answersJSON = e.parameter.answers || "{}";

  // Convert string → object {"Q01": "answer", ...}
  let answersObj = {};
  try {
    answersObj = JSON.parse(answersJSON);
  } catch (err) {
    answersObj = {};
  }

  // Ensure consistent ordering Q01 → Q24
  const questionKeys = [];
  for (let i = 1; i <= 24; i++) {
    questionKeys.push("Q" + String(i).padStart(2, "0"));
  }

  const answerValues = questionKeys.map(key => answersObj[key] || "");

  sheet.appendRow([
    new Date(),  // Timestamp
    userID,
    score,
    ...answerValues  // Spread into 24 separate columns
  ]);

  return ContentService.createTextOutput("OK");
}



function testDoPost() {
  const fakeEvent = {
    parameter: {
      userID: "test_user",
      score: 5
    }
  };
  doGet(fakeEvent);
}

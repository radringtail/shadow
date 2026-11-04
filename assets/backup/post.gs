function doPost(e){
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var ghostCode = JSON.parse(decodeBase64(data.code));
  var timeStamp = Utilities.formatDate(new Date(), "GMT-7:00", "yyyy-MM-dd HH:mm:ss");

  const playerIds = sheet.getRange("A:A").getValues().flat().map(v => String(v).trim());
  const isDuplicate = playerIds.includes(ghostCode.playerId);
  if(isDuplicate){
    return ContentService.createTextOutput('Duplicate');
  }

  sheet.appendRow([
    ghostCode.playerId,
    "Submitted",
    timeStamp,
    ghostCode.playerName,
    ghostCode.ghostName,
    ghostCode.playerAttr,
    ghostCode.playerAura,
    ghostCode.playerAffi,
    ghostCode.ghostAttr,
    ghostCode.ghostAura,
    ghostCode.ghostAffi,
    ghostCode.cardTheme,
    ghostCode.cluesFoundCount,
    ghostCode.ghostPrint,
    ghostCode.playerBsky,
    data.code,
  ]);

  return ContentService.createTextOutput('Success');
}

function decodeBase64(encodedString) {
  const decodedBytes = Utilities.base64Decode(encodedString);
  const decodedString = Utilities.newBlob(decodedBytes).getDataAsString();
  return decodedString;
}
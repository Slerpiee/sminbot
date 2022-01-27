const request = require('request');
request({uri: 'https://api.stratz.com/api/v1/Ability', headers: {"api-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTg5Mzc1OTU0OTMiLCJ1bmlxdWVfbmFtZSI6IlVtcGEtTHVtcGEiLCJTdWJqZWN0IjoiMTdiMmYzNjAtMTUwNy00MDg2LWFjOWYtMzUyNzhiNjgxYjNmIiwiU3RlYW1JZCI6Ijk3NzMyOTc2NSIsIm5iZiI6MTY0MzA0MTE0NSwiZXhwIjoxNjc0NTc3MTQ1LCJpYXQiOjE2NDMwNDExNDUsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.YNNLEOurUwCuiPY6twfqAYSF_1SROM5TJoqQpDZdTIU"}}, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
var express = require('express')
const app = express()
const cors = require('cors')
const fetch = require('node-fetch')
const allFootballPlayersEndpoint = "https://www.fantasyfootballnerd.com/service/players/json/gh8mn6qvv3q3/"




// fetch("https://www.fantasyfootballnerd.com/service/players/xml/gh8mn6qvv3q3/",{
//   method: "GET",
//   headers: { "Content-Type": "application/json"}
// })
//   .then(res => res.json())
//   .then(playerIndex => console.log(playerIndex))
//   .catch(function(error) {
//     console.log(error)
//   })


// CORS
app.use(cors())
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.get("/", (req, res) => {
  res.json({
    "Players": [
    {
    "playerId": "1",
    "active": "0",
    "jersey": "0",
    "lname": "Ainge",
    "fname": "Erik",
    "displayName": "Erik Ainge",
    "team": "NYJ",
    "position": "QB",
    "height": "",
    "weight": "",
    "dob": "0000-00-00",
    "college": ""
    },
    {
    "playerId": "2",
    "active": "0",
    "jersey": "3",
    "lname": "Anderson",
    "fname": "Derek",
    "displayName": "Derek Anderson",
    "team": "BUF",
    "position": "QB",
    "height": "6-6",
    "weight": "235",
    "dob": "1983-06-15",
    "college": "Oregon State"
    },
    {
    "playerId": "3",
    "active": "0",
    "jersey": "0",
    "lname": "Baker",
    "fname": "Matt",
    "displayName": "Matt Baker",
    "team": "BUF",
    "position": "QB",
    "height": "6-2",
    "weight": "217",
    "dob": "0000-00-00",
    "college": "North Carolina"
    },
    {
    "playerId": "4",
    "active": "0",
    "jersey": "2",
    "lname": "Bartel",
    "fname": "Richard",
    "displayName": "Richard Bartel",
    "team": "ARI",
    "position": "QB",
    "height": "6-4",
    "weight": "230",
    "dob": "1983-02-03",
    "college": "Tarleton State"
    },
    {
    "playerId": "5",
    "active": "0",
    "jersey": "14",
    "lname": "Basanez",
    "fname": "Brett",
    "displayName": "Brett Basanez",
    "team": "CHI",
    "position": "QB",
    "height": "6-1",
    "weight": "208",
    "dob": "0000-00-00",
    "college": "Northwestern"
    },
    {
    "playerId": "6",
    "active": "0",
    "jersey": "16",
    "lname": "Batch",
    "fname": "Charlie",
    "displayName": "Charlie Batch",
    "team": "PIT",
    "position": "QB",
    "height": "6-2",
    "weight": "216",
    "dob": "1974-12-05",
    "college": "Eastern Michigan"
    },
    {
    "playerId": "7",
    "active": "0",
    "jersey": "12",
    "lname": "Beck",
    "fname": "John",
    "displayName": "John Beck",
    "team": "HOU",
    "position": "QB",
    "height": "6-2",
    "weight": "215",
    "dob": "1981-08-21",
    "college": "Brigham Young"
  }]})
})



// Server
  var server = app.listen(9000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})






console.log('Server running at http://127.0.0.1:9000/')




// import { Client } from 'espn-fantasy-football-api'
// const myClient = new Client({ leagueId: 20470559 })

// // myClient.setCookies({ espnS2: process.env.ESPNS2, SWID: process.env.SWID })

// // let data

// // myClient.getHistoricalScoreboardForWeek({seasonId:2019, scoringPeriodId:13, matchupPeriodId:13}).then((boxscores) => {
// //     data = boxscores
// // })




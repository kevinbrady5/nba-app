testingAPI = document.querySelector(".testingAPI");

avgPts = document.querySelector(".avgPts");
ptsGame1 = document.querySelector(".ptsGame1");
ptsGame2 = document.querySelector(".ptsGame2");
ptsGame3 = document.querySelector(".ptsGame3");
ptsGame4 = document.querySelector(".ptsGame4");
ptsGame5 = document.querySelector(".ptsGame5");

avgAst = document.querySelector(".avgAst");
astGame1 = document.querySelector(".astGame1");
astGame2 = document.querySelector(".astGame2");
astGame3 = document.querySelector(".astGame3");
astGame4 = document.querySelector(".astGame4");
astGame5 = document.querySelector(".astGame5");

avgReb = document.querySelector(".avgReb");
rebGame1 = document.querySelector(".rebGame1");
rebGame2 = document.querySelector(".rebGame2");
rebGame3 = document.querySelector(".rebGame3");
rebGame4 = document.querySelector(".rebGame4");
rebGame5 = document.querySelector(".rebGame5");

avgBlk = document.querySelector(".avgBlk");
blkGame1 = document.querySelector(".blkGame1");
blkGame2 = document.querySelector(".blkGame2");
blkGame3 = document.querySelector(".blkGame3");
blkGame4 = document.querySelector(".blkGame4");
blkGame5 = document.querySelector(".blkGame5");

avgStl = document.querySelector(".avgStl");
stlGame1 = document.querySelector(".stlGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");


/*
fetch('https://www.balldontlie.io/api/v1/teams/12')
  .then((response) => response.json())
  .then((data) => console.log(data));

let teamName;
let teamNameTest;

  fetch('https://www.balldontlie.io/api/v1/teams/12')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    teamName = JSON.stringify(data);
    console.log(teamName);
    teamNameTest = JSON.parse(teamName);
    testingAPI.innerHTML = teamNameTest.name;
  });
*/

//steph curry player id 115


fetch('https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=115')
  .then((response) => response.json())
  .then((data) => {

    let playerStatsJSON = JSON.stringify(data);
    let playerStats = JSON.parse(playerStatsJSON);

    console.log(playerStats.data[playerStats.data.length-10]);
    console.log(playerStats.data[playerStats.data.length-9]);
    console.log(playerStats.data[playerStats.data.length-8]);
    console.log(playerStats.data[playerStats.data.length-7]);
    console.log(playerStats.data[playerStats.data.length-6]);
    console.log(playerStats.data[playerStats.data.length-5]);
    console.log(playerStats.data[playerStats.data.length-4]);
    console.log(playerStats.data[playerStats.data.length-3]);
    console.log(playerStats.data[playerStats.data.length-2]);
    console.log(playerStats.data[playerStats.data.length-1]);

    let mostRecentGamePlayedCounter = 0;
    let game5;
    let game4;
    let game3;
    let game2;
    let game1;

    function setGame(gameNumber) {
      mostRecentGamePlayedCounter += 1;

      if(playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter].min != 0){
        switch (gameNumber) {
          case 1:
            game1 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 2:
            game2 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 3:
            game3 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 4:
            game4 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 5:
            game5 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
        }
        console.log(mostRecentGamePlayedCounter);
      } else {
        setGame(gameNumber);
      }
    }

    setGame(5);
    setGame(4);
    setGame(3);
    setGame(2);
    setGame(1);

    let playerLastFive = [game1, game2, game3, game4, game5];

    console.log(playerLastFive);
    console.log(game1.pts, game2.pts, game3.pts, game4.pts, game5.pts);

    let averagePoints = (game1.pts + game2.pts + game3.pts + game4.pts + game5.pts) / playerLastFive.length;
    
    let averageAssists = (game1.ast + game2.ast + game3.ast + game4.ast + game5.ast) / playerLastFive.length;


    let game1Reb = game1.oreb + game1.dreb;
    let game2Reb = game2.oreb + game2.dreb;
    let game3Reb = game3.oreb + game3.dreb;
    let game4Reb = game4.oreb + game4.dreb;
    let game5Reb = game5.oreb + game5.dreb;


    let averageRebounds = (game1Reb + game2Reb + game3Reb + game4Reb + game5Reb) / playerLastFive.length;

    let averageBlocks = (game1.blk + game2.blk + game3.blk + game4.blk + game5.blk) / playerLastFive.length;

    let averageSteals = (game1.stl + game2.stl + game3.stl + game4.stl + game5.stl) / playerLastFive.length;

    /*testingAPI.innerHTML = game1.player.first_name + " " + game1.player.last_name + " Average Points Over Last 5: " + averagePoints;*/



    avgPts.innerHTML = averagePoints;
    ptsGame1.innerHTML = "Pts: " + game1.pts;
    ptsGame2.innerHTML = game2.pts;
    ptsGame3.innerHTML = game3.pts;
    ptsGame4.innerHTML = game4.pts;
    ptsGame5.innerHTML = game5.pts;

    avgAst.innerHTML = averageAssists;
    astGame1.innerHTML = "Ast: " + game1.ast;
    astGame2.innerHTML = game2.ast;
    astGame3.innerHTML = game3.ast;
    astGame4.innerHTML = game4.ast;
    astGame5.innerHTML = game5.ast;

    avgReb.innerHTML = averageRebounds;
    rebGame1.innerHTML = "Reb: " + game1Reb;
    rebGame2.innerHTML = game2Reb;
    rebGame3.innerHTML = game3Reb;
    rebGame4.innerHTML = game4Reb;
    rebGame5.innerHTML = game5Reb;

    avgBlk.innerHTML = averageBlocks;
    blkGame1.innerHTML = "Blk: " + game1.blk;
    blkGame2.innerHTML = game2.blk;
    blkGame3.innerHTML = game3.blk;
    blkGame4.innerHTML = game4.blk;
    blkGame5.innerHTML = game5.blk;

    avgStl.innerHTML = averageSteals;
    stlGame1.innerHTML = "Stl: " + game1.stl;
    stlGame2.innerHTML = game2.stl;
    stlGame3.innerHTML = game3.stl;
    stlGame4.innerHTML = game4.stl;
    stlGame5.innerHTML = game5.stl;
  })

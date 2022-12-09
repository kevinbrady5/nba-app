//nba-app js file

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

avg3p = document.querySelector(".avg3p");
threePgame1 = document.querySelector(".threePgame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avg3pa = document.querySelector(".avg3pa");
threePaGame1 = document.querySelector(".threePaGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avg3pp = document.querySelector(".avg3pp");
threePpGame1 = document.querySelector(".threePpGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avg2p = document.querySelector(".avg2p");
twoPgame1 = document.querySelector(".twoPgame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avg2pa = document.querySelector(".avg2pa");
twoPaGame1 = document.querySelector(".twoPaGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avg2pp = document.querySelector(".avg2pp");
twoPpGame1 = document.querySelector(".twoPpGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avgFt = document.querySelector(".avgFt");
ftGame1 = document.querySelector(".ftGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avgFta = document.querySelector(".avgFta");
ftaGame1 = document.querySelector(".ftaGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avgFtp = document.querySelector(".avgFtp");
ftpGame1 = document.querySelector(".ftpGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avgMin = document.querySelector(".avgMin");
minGame1 = document.querySelector(".minGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avgTo = document.querySelector(".avgTo");
toGame1 = document.querySelector(".toGame1");
stlGame2 = document.querySelector(".stlGame2");
stlGame3 = document.querySelector(".stlGame3");
stlGame4 = document.querySelector(".stlGame4");
stlGame5 = document.querySelector(".stlGame5");

avgPf = document.querySelector(".avgPf");
pfGame1 = document.querySelector(".pfGame1");
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

    let averageRebounds = (game1.reb + game2.reb + game3.reb + game4.reb + game5.reb) / playerLastFive.length;

    let averageBlocks = (game1.blk + game2.blk + game3.blk + game4.blk + game5.blk) / playerLastFive.length;

    let averageSteals = (game1.stl + game2.stl + game3.stl + game4.stl + game5.stl) / playerLastFive.length;

    let average3p = (game1.fg3m + game2.fg3m + game3.fg3m + game4.fg3m + game5.fg3m) / playerLastFive.length;

    let average3pa = (game1.fg3a + game2.fg3a + game3.fg3a + game4.fg3a + game5.fg3a) / playerLastFive.length;

    let average3pp = (game1.fg3_pct + game2.fg3_pct + game3.fg3_pct + game4.fg3_pct + game5.fg3_pct) / playerLastFive.length;

    let average2p = (game1.fgm + game2.fgm + game3.fgm + game4.fgm + game5.fgm) / playerLastFive.length;

    let average2pa = (game1.fga + game2.fga + game3.fga + game4.fga + game5.fga) / playerLastFive.length;

    let average2pp = (game1.fg_pct + game2.fg_pct + game3.fg_pct + game4.fg_pct + game5.fg_pct) / playerLastFive.length;

    let averageFt = (game1.ftm + game2.ftm + game3.ftm + game4.ftm + game5.ftm) / playerLastFive.length;

    let averageFta = (game1.fta + game2.fta + game3.fta + game4.fta + game5.fta) / playerLastFive.length;

    let averageFtp = (game1.ft_pct + game2.ft_pct + game3.ft_pct + game4.ft_pct + game5.ft_pct) / playerLastFive.length;

    let averageMin = (parseInt(game1.min) + parseInt(game2.min) + parseInt(game3.min) + parseInt(game4.min) + parseInt(game5.min)) / playerLastFive.length;

    let averageTo = (game1.turnover + game2.turnover + game3.turnover + game4.turnover + game5.turnover) / playerLastFive.length;

    let averagePf = (game1.pf + game2.pf + game3.pf + game4.pf + game5.pf) / playerLastFive.length;


    avgPts.innerHTML = averagePoints;
    ptsGame1.innerHTML = game1.pts;
    ptsGame2.innerHTML = game2.pts;
    ptsGame3.innerHTML = game3.pts;
    ptsGame4.innerHTML = game4.pts;
    ptsGame5.innerHTML = game5.pts;

    avgAst.innerHTML = averageAssists;
    astGame1.innerHTML = game1.ast;
    astGame2.innerHTML = game2.ast;
    astGame3.innerHTML = game3.ast;
    astGame4.innerHTML = game4.ast;
    astGame5.innerHTML = game5.ast;

    avgReb.innerHTML = averageRebounds;
    rebGame1.innerHTML = game1.reb;
    rebGame2.innerHTML = game2.reb;
    rebGame3.innerHTML = game3.reb;
    rebGame4.innerHTML = game4.reb;
    rebGame5.innerHTML = game5.reb;

    avgBlk.innerHTML = averageBlocks;
    blkGame1.innerHTML = game1.blk;
    blkGame2.innerHTML = game2.blk;
    blkGame3.innerHTML = game3.blk;
    blkGame4.innerHTML = game4.blk;
    blkGame5.innerHTML = game5.blk;

    avgStl.innerHTML = averageSteals;
    stlGame1.innerHTML = game1.stl;
    stlGame2.innerHTML = game2.stl;
    stlGame3.innerHTML = game3.stl;
    stlGame4.innerHTML = game4.stl;
    stlGame5.innerHTML = game5.stl;

    avg3p.innerHTML = average3p;
    threePgame1.innerHTML = game1.fg3m;
    /*
    threePgame2.innerHTML = game2.fg3m;
    threePgame3.innerHTML = game3.fg3m;
    threePgame4.innerHTML = game4.fg3m;
    threePgame5.innerHTML = game5.fg3m;
    */
    avg3pa.innerHTML = average3pa;
    threePaGame1.innerHTML = game1.fg3a;
    /*
    threePgame2.innerHTML = game2.fg3m;
    threePgame3.innerHTML = game3.fg3m;
    threePgame4.innerHTML = game4.fg3m;
    threePgame5.innerHTML = game5.fg3m;
    */
    avg3pp.innerHTML = average3pp.toFixed(2);
    threePpGame1.innerHTML = game1.fg3_pct.toFixed(2);
    /*
    threePgame2.innerHTML = game2.fg3m;
    threePgame3.innerHTML = game3.fg3m;
    threePgame4.innerHTML = game4.fg3m;
    threePgame5.innerHTML = game5.fg3m;
    */

    avg2p.innerHTML = average2p;
    twoPgame1.innerHTML = game1.fgm;
    /*
    twoPgame2.innerHTML = game2.fgm;
    twoPgame3.innerHTML = game3.fgm;
    twoPgame4.innerHTML = game4.fgm;
    twoPgame5.innerHTML = game5.fgm;
    */
    avg2pa.innerHTML = average2pa;
    twoPaGame1.innerHTML = game1.fga;
    /*
    twoPgame2.innerHTML = game2.fgm;
    twoPgame3.innerHTML = game3.fgm;
    twoPgame4.innerHTML = game4.fgm;
    twoPgame5.innerHTML = game5.fgm;
    */
    avg2pp.innerHTML = average2pp.toFixed(2);
    twoPpGame1.innerHTML = game1.fg_pct.toFixed(2);
    /*
    twoPgame2.innerHTML = game2.fgm;
    twoPgame3.innerHTML = game3.fgm;
    twoPgame4.innerHTML = game4.fgm;
    twoPgame5.innerHTML = game5.fgm;
    */

    avgFt.innerHTML = averageFt;
    ftGame1.innerHTML = game1.ftm;
    /*
    ftpGame2.innerHTML = game2.ft_pct;
    ftpGame3.innerHTML = game3.ft_pct;
    ftpGame4.innerHTML = game4.ft_pct;
    ftpGame5.innerHTML = game5.ft_pct;
    */
    avgFta.innerHTML = averageFta;
    ftaGame1.innerHTML = game1.fta;
    /*
    ftpGame2.innerHTML = game2.ft_pct;
    ftpGame3.innerHTML = game3.ft_pct;
    ftpGame4.innerHTML = game4.ft_pct;
    ftpGame5.innerHTML = game5.ft_pct;
    */
    avgFtp.innerHTML = averageFtp;
    ftpGame1.innerHTML = game1.ft_pct;
    /*
    ftpGame2.innerHTML = game2.ft_pct;
    ftpGame3.innerHTML = game3.ft_pct;
    ftpGame4.innerHTML = game4.ft_pct;
    ftpGame5.innerHTML = game5.ft_pct;
    */

    avgMin.innerHTML = averageMin;
    minGame1.innerHTML = game1.min;
    /*
    ftpGame2.innerHTML = game2.ft_pct;
    ftpGame3.innerHTML = game3.ft_pct;
    ftpGame4.innerHTML = game4.ft_pct;
    ftpGame5.innerHTML = game5.ft_pct;
    */

    avgTo.innerHTML = averageTo;
    toGame1.innerHTML = game1.turnover;
    /*
    ftpGame2.innerHTML = game2.ft_pct;
    ftpGame3.innerHTML = game3.ft_pct;
    ftpGame4.innerHTML = game4.ft_pct;
    ftpGame5.innerHTML = game5.ft_pct;
    */

    avgPf.innerHTML = averagePf;
    pfGame1.innerHTML = game1.pf;
    /*
    ftpGame2.innerHTML = game2.ft_pct;
    ftpGame3.innerHTML = game3.ft_pct;
    ftpGame4.innerHTML = game4.ft_pct;
    ftpGame5.innerHTML = game5.ft_pct;
    */
  })

const tagline = document.querySelector(".tagline");

const searchResults = document.querySelector(".searchResults");
const searchNotice = document.querySelector(".searchNotice");
const searchForm = document.getElementById("searchForm");

const statsDisplay = document.querySelector(".statsDisplay");

const playerName = document.querySelector(".playerName");
const playerSize = document.querySelector(".playerSize");
const playerTeam = document.querySelector(".playerTeam");

const game1score = document.querySelector(".game1score");
const game2score = document.querySelector(".game2score");
const game3score = document.querySelector(".game3score");
const game4score = document.querySelector(".game4score");
const game5score = document.querySelector(".game5score");

const game1date = document.querySelector(".game1date");
const game2date = document.querySelector(".game2date");
const game3date = document.querySelector(".game3date");
const game4date = document.querySelector(".game4date");
const game5date = document.querySelector(".game5date");

const avgPts = document.querySelector(".avgPts");
const ptsGame1 = document.querySelector(".ptsGame1");
const ptsGame2 = document.querySelector(".ptsGame2");
const ptsGame3 = document.querySelector(".ptsGame3");
const ptsGame4 = document.querySelector(".ptsGame4");
const ptsGame5 = document.querySelector(".ptsGame5");

const avgAst = document.querySelector(".avgAst");
const astGame1 = document.querySelector(".astGame1");
const astGame2 = document.querySelector(".astGame2");
const astGame3 = document.querySelector(".astGame3");
const astGame4 = document.querySelector(".astGame4");
const astGame5 = document.querySelector(".astGame5");

const avgReb = document.querySelector(".avgReb");
const rebGame1 = document.querySelector(".rebGame1");
const rebGame2 = document.querySelector(".rebGame2");
const rebGame3 = document.querySelector(".rebGame3");
const rebGame4 = document.querySelector(".rebGame4");
const rebGame5 = document.querySelector(".rebGame5");

const avgBlk = document.querySelector(".avgBlk");
const blkGame1 = document.querySelector(".blkGame1");
const blkGame2 = document.querySelector(".blkGame2");
const blkGame3 = document.querySelector(".blkGame3");
const blkGame4 = document.querySelector(".blkGame4");
const blkGame5 = document.querySelector(".blkGame5");

const avgStl = document.querySelector(".avgStl");
const stlGame1 = document.querySelector(".stlGame1");
const stlGame2 = document.querySelector(".stlGame2");
const stlGame3 = document.querySelector(".stlGame3");
const stlGame4 = document.querySelector(".stlGame4");
const stlGame5 = document.querySelector(".stlGame5");

const avg3p = document.querySelector(".avg3p");
const threePgame1 = document.querySelector(".threePgame1");
const threePgame2 = document.querySelector(".threePgame2");
const threePgame3 = document.querySelector(".threePgame3");
const threePgame4 = document.querySelector(".threePgame4");
const threePgame5 = document.querySelector(".threePgame5");

const avg3pa = document.querySelector(".avg3pa");
const threePaGame1 = document.querySelector(".threePaGame1");
const threePaGame2 = document.querySelector(".threePaGame2");
const threePaGame3 = document.querySelector(".threePaGame3");
const threePaGame4 = document.querySelector(".threePaGame4");
const threePaGame5 = document.querySelector(".threePaGame5");

const avg3pp = document.querySelector(".avg3pp");
const threePpGame1 = document.querySelector(".threePpGame1");
const threePpGame2 = document.querySelector(".threePpGame2");
const threePpGame3 = document.querySelector(".threePpGame3");
const threePpGame4 = document.querySelector(".threePpGame4");
const threePpGame5 = document.querySelector(".threePpGame5");

const avg2p = document.querySelector(".avg2p");
const twoPgame1 = document.querySelector(".twoPgame1");
const twoPgame2 = document.querySelector(".twoPgame2");
const twoPgame3 = document.querySelector(".twoPgame3");
const twoPgame4 = document.querySelector(".twoPgame4");
const twoPgame5 = document.querySelector(".twoPgame5");

const avg2pa = document.querySelector(".avg2pa");
const twoPaGame1 = document.querySelector(".twoPaGame1");
const twoPaGame2 = document.querySelector(".twoPaGame2");
const twoPaGame3 = document.querySelector(".twoPaGame3");
const twoPaGame4 = document.querySelector(".twoPaGame4");
const twoPaGame5 = document.querySelector(".twoPaGame5");

const avg2pp = document.querySelector(".avg2pp");
const twoPpGame1 = document.querySelector(".twoPpGame1");
const twoPpGame2 = document.querySelector(".twoPpGame2");
const twoPpGame3 = document.querySelector(".twoPpGame3");
const twoPpGame4 = document.querySelector(".twoPpGame4");
const twoPpGame5 = document.querySelector(".twoPpGame5");

const avgFt = document.querySelector(".avgFt");
const ftGame1 = document.querySelector(".ftGame1");
const ftGame2 = document.querySelector(".ftGame2");
const ftGame3 = document.querySelector(".ftGame3");
const ftGame4 = document.querySelector(".ftGame4");
const ftGame5 = document.querySelector(".ftGame5");

const avgFta = document.querySelector(".avgFta");
const ftaGame1 = document.querySelector(".ftaGame1");
const ftaGame2 = document.querySelector(".ftaGame2");
const ftaGame3 = document.querySelector(".ftaGame3");
const ftaGame4 = document.querySelector(".ftaGame4");
const ftaGame5 = document.querySelector(".ftaGame5");

const avgFtp = document.querySelector(".avgFtp");
const ftpGame1 = document.querySelector(".ftpGame1");
const ftpGame2 = document.querySelector(".ftpGame2");
const ftpGame3 = document.querySelector(".ftpGame3");
const ftpGame4 = document.querySelector(".ftpGame4");
const ftpGame5 = document.querySelector(".ftpGame5");

const avgMin = document.querySelector(".avgMin");
const minGame1 = document.querySelector(".minGame1");
const minGame2 = document.querySelector(".minGame2");
const minGame3 = document.querySelector(".minGame3");
const minGame4 = document.querySelector(".minGame4");
const minGame5 = document.querySelector(".minGame5");

const avgTo = document.querySelector(".avgTo");
const toGame1 = document.querySelector(".toGame1");
const toGame2 = document.querySelector(".toGame2");
const toGame3 = document.querySelector(".toGame3");
const toGame4 = document.querySelector(".toGame4");
const toGame5 = document.querySelector(".toGame5");

const avgPf = document.querySelector(".avgPf");
const pfGame1 = document.querySelector(".pfGame1");
const pfGame2 = document.querySelector(".pfGame2");
const pfGame3 = document.querySelector(".pfGame3");
const pfGame4 = document.querySelector(".pfGame4");
const pfGame5 = document.querySelector(".pfGame5");

//steph curry player id 115

let apiUrl = 'https://www.balldontlie.io/api/v1/stats?seasons[]=2022';

const apiUrlPlayers = 'https://www.balldontlie.io/api/v1/players?per_page=100';


  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  if(urlParams.has('playerName')){
    searchPlayer();
  }

  // Click handler for entire DIV container
  searchResults.addEventListener('click', function (e) {
    // But only for elements that have a player-button class
    if (e.target.classList.contains('player-button')) {
      console.log("I clicked" + e.target.innerHTML);
      setPlayer(e.target.innerHTML);
    }
  });

function searchPlayer() {
  tagline.style.display = "none";
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  const name = urlParams.get('playerName')
  console.log(name);
  document.getElementById("searchPlayer").value = name;
  let url = 'https://www.balldontlie.io/api/v1/players?per_page=10';
  let playerUrl = `${url}&search=${name}`;
  fetch(playerUrl)
  .then((response) => response.json())
  .then((data) => {
    let playerNameJSONsearch = JSON.stringify(data);
    let playerNameStringSearch = JSON.parse(playerNameJSONsearch);
   
    playerNameStringSearch.data.forEach(player => {
      let apiUrlSearch = 'https://www.balldontlie.io/api/v1/stats?seasons[]=2022';
      apiUrlSearch = `${apiUrlSearch}&player_ids[]=${player.id}`;
console.log(player.id);
  fetch(apiUrlSearch)
  .then((response) => response.json())
  .then((data) => {

    let playerStatsJSON = JSON.stringify(data);
    let playerStats = JSON.parse(playerStatsJSON);
    let gameCount = 0;
    playerStats.data.forEach(game => {
      if(game.min != 0) {
        gameCount ++;
      }
    });
    if(playerStats.data.length != 0 && gameCount >= 5) {
      let playerButton = document.createElement("button");
      playerButton.id = player.first_name + player.last_name + "Button";
      playerButton.classList.add('player-button');
      playerButton.innerHTML = player.first_name + " " + player.last_name;
      
      searchResults.appendChild(playerButton);
      searchResults.innerHTML += "<br>";
      searchNotice.style.display = "block";
      searchNotice.innerHTML = "*only showing players with at least 5 games played this season"
    }
  })

    });
   
  })
}


function setPlayer(name) {
  
  console.log(name);
  let url = 'https://www.balldontlie.io/api/v1/players';
  let playerUrl = `${url}?search=${name}`;
  fetch(playerUrl)
  .then((response) => response.json())
  .then((data) => {
    let playerNameJSON = JSON.stringify(data);
    let playerNameString = JSON.parse(playerNameJSON);

    let selectedPlayerId = playerNameString.data[0].id;
    console.log(selectedPlayerId);

    apiUrl = `${apiUrl}&player_ids[]=${selectedPlayerId}`;
    console.log(apiUrl);
    
    checkStats();
  })
}

function checkStats(){
  fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {

    let playerStatsJSON = JSON.stringify(data);
    let playerStats = JSON.parse(playerStatsJSON);
    let gameCount = 0;
    playerStats.data.forEach(game => {
      if(game.min != 0) {
        gameCount ++;
      }
    });
    if(playerStats.data.length != 0 && gameCount >= 5) {
      getStats();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  })
}

function getStats(){
//searchForm.style.display = "none";
document.getElementById("searchPlayer").value = "";
searchResults.innerHTML="";
searchNotice.style.display = "none";
statsDisplay.style.display = "block";
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {

    let playerStatsJSON = JSON.stringify(data);
    let playerStats = JSON.parse(playerStatsJSON);
    playerStats.data.sort(function(a, b){
      const date1 = new Date(a.game.date)
      const date2 = new Date(b.game.date)

      return date1 - date2;
    })

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
            game5 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 2:
            game4 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 3:
            game3 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 4:
            game2 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
            break;
          case 5:
            game1 = playerStats.data[playerStats.data.length-mostRecentGamePlayedCounter];
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


    playerName.innerHTML = game1.player.first_name + " " + game1.player.last_name;
    playerSize.innerHTML = game1.player.height_feet + "' " + game1.player.height_inches + "&quot" + ", " + game1.player.weight_pounds +" lbs" + ", " + game1.player.position;
    playerTeam.innerHTML = game1.team.full_name;

    game1score.innerHTML = game1.game.visitor_team_score + " - " + game1.game.home_team_score;
    game2score.innerHTML = game2.game.visitor_team_score + " - " + game2.game.home_team_score;
    game3score.innerHTML = game3.game.visitor_team_score + " - " + game3.game.home_team_score;
    game4score.innerHTML = game4.game.visitor_team_score + " - " + game4.game.home_team_score;
    game5score.innerHTML = game5.game.visitor_team_score + " - " + game5.game.home_team_score;

    game1date.innerHTML = game1.game.date.slice(0, 10);
    game2date.innerHTML = game2.game.date.slice(0, 10);
    game3date.innerHTML = game3.game.date.slice(0, 10);
    game4date.innerHTML = game4.game.date.slice(0, 10);
    game5date.innerHTML = game5.game.date.slice(0, 10);

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
    threePgame2.innerHTML = game2.fg3m;
    threePgame3.innerHTML = game3.fg3m;
    threePgame4.innerHTML = game4.fg3m;
    threePgame5.innerHTML = game5.fg3m;
  
    avg3pa.innerHTML = average3pa;
    threePaGame1.innerHTML = game1.fg3a;
    threePaGame2.innerHTML = game2.fg3a;
    threePaGame3.innerHTML = game3.fg3a;
    threePaGame4.innerHTML = game4.fg3a;
    threePaGame5.innerHTML = game5.fg3a;

    avg3pp.innerHTML = average3pp.toFixed(2);
    threePpGame1.innerHTML = game1.fg3_pct.toFixed(2);
    threePpGame2.innerHTML = game2.fg3_pct.toFixed(2);;
    threePpGame3.innerHTML = game3.fg3_pct.toFixed(2);;
    threePpGame4.innerHTML = game4.fg3_pct.toFixed(2);;
    threePpGame5.innerHTML = game5.fg3_pct.toFixed(2);;

    avg2p.innerHTML = average2p;
    twoPgame1.innerHTML = game1.fgm;
    twoPgame2.innerHTML = game2.fgm;
    twoPgame3.innerHTML = game3.fgm;
    twoPgame4.innerHTML = game4.fgm;
    twoPgame5.innerHTML = game5.fgm;
    
    avg2pa.innerHTML = average2pa;
    twoPaGame1.innerHTML = game1.fga;
    twoPaGame2.innerHTML = game2.fga;
    twoPaGame3.innerHTML = game3.fga;
    twoPaGame4.innerHTML = game4.fga;
    twoPaGame5.innerHTML = game5.fga;
 
    avg2pp.innerHTML = average2pp.toFixed(2);
    twoPpGame1.innerHTML = game1.fg_pct.toFixed(2);
    twoPpGame2.innerHTML = game2.fg_pct.toFixed(2);;
    twoPpGame3.innerHTML = game3.fg_pct.toFixed(2);;
    twoPpGame4.innerHTML = game4.fg_pct.toFixed(2);;
    twoPpGame5.innerHTML = game5.fg_pct.toFixed(2);;

    avgFt.innerHTML = averageFt;
    ftGame1.innerHTML = game1.ftm;
    ftGame2.innerHTML = game2.ftm;
    ftGame3.innerHTML = game3.ftm;
    ftGame4.innerHTML = game4.ftm;
    ftGame5.innerHTML = game5.ftm;
  
    avgFta.innerHTML = averageFta;
    ftaGame1.innerHTML = game1.fta;
    ftaGame2.innerHTML = game2.fta;
    ftaGame3.innerHTML = game3.fta;
    ftaGame4.innerHTML = game4.fta;
    ftaGame5.innerHTML = game5.fta;
    
    avgFtp.innerHTML = averageFtp.toFixed(2);;
    ftpGame1.innerHTML = game1.ft_pct.toFixed(2);;
    ftpGame2.innerHTML = game2.ft_pct.toFixed(2);;
    ftpGame3.innerHTML = game3.ft_pct.toFixed(2);;
    ftpGame4.innerHTML = game4.ft_pct.toFixed(2);;
    ftpGame5.innerHTML = game5.ft_pct.toFixed(2);;

    avgMin.innerHTML = averageMin;
    minGame1.innerHTML = game1.min;
    minGame2.innerHTML = game2.min;
    minGame3.innerHTML = game3.min;
    minGame4.innerHTML = game4.min;
    minGame5.innerHTML = game5.min;

    avgTo.innerHTML = averageTo;
    toGame1.innerHTML = game1.turnover;
    toGame2.innerHTML = game2.turnover;
    toGame3.innerHTML = game3.turnover;
    toGame4.innerHTML = game4.turnover;
    toGame5.innerHTML = game5.turnover;

    avgPf.innerHTML = averagePf;
    pfGame1.innerHTML = game1.pf;
    pfGame2.innerHTML = game2.pf;
    pfGame3.innerHTML = game3.pf;
    pfGame4.innerHTML = game4.pf;
    pfGame5.innerHTML = game5.pf;
  })
}


function getPlayers(
  url = apiUrlPlayers,
  page = 35,
  previousResponse = []
) {
  return fetch(`${url}&page=${page}`) // Append the page number to the base URL
    .then(response => response.json())
    .then(newResponse => {
      const response = previousResponse.concat(newResponse); // Combine the two arrays

      if (newResponse.length !== 0) {
        page++;

        return getPlayers(url, page, response);
      }

      return response;
    });
}
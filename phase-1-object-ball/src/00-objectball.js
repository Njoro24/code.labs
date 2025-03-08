function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }

  console.log(gameObject());


// Function to find a player in the game object
// team.players + name looks up the player inside the players object in both teams
function findPlayer(name) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
        if (team.players[name]) {
            return { name, ...team.players[name] };
        }
    }
    return null; 
}
    console.log(findPlayer("Mason Plumlee"))

// Function to get points scored by a player
function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player ? player.points : "Player not found";
}
  console.log(findPlayer("Jason Terry"))

//Function shoe size of a player
function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return player ? `${player.name} has a shoe size of ${player.shoe}` : "Player not found";
}
    console.log(shoeSize("Mason Plumlee"));

// Team colors
function teamcolors(teamName) {
    const game = gameObject();
    for(let team of [game.home, game.away]){
        if (team.teamName===teamName){
            return `${team.teamName} colors are: ${team.colors.join(", ")}`;
        }
    }
    return "Inavalid!"
}
    console.log(teamcolors("Charlotte Hornets"))

// Team Names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
console.log("All team names:", teamNames())

// Function to get player numbers of a team
function playerNumbers(teamName) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
      if (team.teamName === teamName) {
        return Object.values(team.players).map(player => player.number);
      }
    }
    return "Team not found";
  }

  console.log("Jersey numbers of Charlotte Hornets:", playerNumbers("Charlotte Hornets"));

// Function to get player stats
function playerStats(playerName) {
    const game = gameObject();
    for (let team of [game.home, game.away]) {
      if (team.players[playerName]) {
        return team.players[playerName];
      }
    }
    return "Player not found";
  }

  console.log("Rebounds of player with biggest shoe:", bigShoeRebounds());



  // Function bigshoeRebounds
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoe = 0;
  let rebounds = 0;

  for (let team of [game.home, game.away]) {
    for (let player in team.players) {
      if (team.players[player].shoe > largestShoe) {
        largestShoe = team.players[player].shoe;
        rebounds = team.players[player].rebounds;
      }
    }
  }
  return rebounds;
}
console.log("Stats of Ben Gordon:", playerStats("Ben Gordon"));


// Function to find the player with the most points
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
  
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        if (team.players[player].points > maxPoints) {
          maxPoints = team.players[player].points;
          bestPlayer = player;
        }
      }
    }
    return bestPlayer;
  }
  console.log("Player with most points:", mostPointsScored());

// Function Winning team
function winningTeam() {
    const game = gameObject();
    let homePoints = Object.values(game.home.players).reduce((sum, p) => sum + p.points, 0);
    let awayPoints = Object.values(game.away.players).reduce((sum, p) => sum + p.points, 0);
    
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  console.log("Winning team:", winningTeam());

 // Function to find the player with the longest name
function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (let team of [game.home, game.away]) {
    for (let player in team.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}

console.log("Player with longest name:", playerWithLongestName());

// Function to check if the player with the longest name also had the most steals
function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    const game = gameObject();
    let maxSteals = 0;
  
    for (let team of [game.home, game.away]) {
      for (let player in team.players) {
        if (team.players[player].steals > maxSteals) {
          maxSteals = team.players[player].steals;
        }
      }
    }
    return game.home.players[longestName]?.steals === maxSteals || game.away.players[longestName]?.steals === maxSteals;
  }
  console.log("Did longest name player have the most steals?", doesLongNameStealATon());
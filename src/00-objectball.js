/* #1 numPointsScored */
// function numPointsScored(playerName) {
//     // debugger
//     let game = gameObject()

//     // Look at key home.
//     // Look at key players.
//     // Check if players obj has key that equals argument playerName.
//     // If true return playerName.points.
//     // Else look at key away.
//     // Look at key players.
//     // Check if players obj has key that equals argument playerName.

//     // const playerPoints = game.away.players[playerName].points
//     // console.log(playerPoints)
//     for (let topLevelKey in game) {
//         console.log(game[topLevelKey])
//         let secondLevel = game[topLevelKey]
//         for (let secondLevelKey in secondLevel.players) {
//             // console.log(secondLevel[secondLevelKey])
//             // console.log(secondLevel["players"])
//             console.log(secondLevelKey)
//             let getPlayer = secondLevel.players
//             if (secondLevelKey === playerName) {
//                 let playerPoints = getPlayer[secondLevelKey].points
//                 console.log("THIS IS THE PLAYER: "+ secondLevelKey)
//                 console.log(playerName+"'s POINTS: "+ playerPoints)
//                 return playerPoints
//             }
//         }
//     }
// }
/* TEST numPointsScored() */
// numPointsScored("Ben Gordon")


/* #2 shoeSize */
// function shoeSize(playerName) {
//     debugger
//     let game = gameObject()

//     // Look at key home.
//     // Look at key players.
//     // Check if players obj has key that equals argument playerName.
//     // If true return playerName.points.
//     // Else look at key away.
//     // Look at key players.
//     // Check if players obj has key that equals argument playerName.

//     // const playerShoe = game.away.players[playerName].shoe
//     // console.log(playerShoe)
//     for (let topLevelKey in game) {
//         console.log(game[topLevelKey])
//         let secondLevel = game[topLevelKey]
//         for (let secondLevelKey in secondLevel.players) {
//             // console.log(secondLevel[secondLevelKey])
//             // console.log(secondLevel["players"])
//             console.log(secondLevelKey)
//             let getPlayer = secondLevel.players
//             if (secondLevelKey === playerName) {
//                 let playerShoe = getPlayer[secondLevelKey].shoe
//                 console.log("THIS IS THE PLAYER: "+ secondLevelKey)
//                 console.log(playerName+"'s SHOE SIZE: "+ playerShoe)
//                 return playerShoe
//             }
//         }
//     }    
// }
/* TEST shoeSize() */
// shoeSize("Brook Lopez")


/* #3 teamColors */
/* 
input: team name
output: array of team's colors
*/
// function teamColors(paramTeamName) {
//     // debugger
//     let game = gameObject()

//     // Look at key home/ away.
//     // Look at key players.
//     // Check if --

//     // const teamColors = game.away.colors
//     // console.log(teamColors)

//     for (let topLevelKey in game) {
//         console.log(game[topLevelKey])
//         let secondLevel = game[topLevelKey]
//         console.log(secondLevel)
//         if (secondLevel.teamName === paramTeamName) {
//             let arrTeamColors = secondLevel.colors
//             // console.log("Found: "+secondLevel.teamName)
//             // console.log("Array: "+arrTeamColors)
//             return arrTeamColors
//         }
//     }    
// }
// /* TEST teamColors() */
// teamColors("Charlotte Hornets")


/* #4 teamNames */
/* 
input: none
output: array of teams' names
*/
// function teamNames() {
//     debugger
//     let game = gameObject()

//     // Look at key home/ away.
//     // Look at key players.
//     // Check if --

//     // const teamColors = game.away.colors
//     // console.log(teamColors)
//     const arrTeamNames = []

//     for (let topLevelKey in game) {
//         // console.log(game[topLevelKey])
//         let secondLevel = game[topLevelKey]
//         // console.log(secondLevel)
//         // console.log(secondLevel.teamName)
//         /* 1ST VERSION ADD TEAM NAME TO ARRAY */
//         // arrTeamNames[arrTeamNames.length] = secondLevel.teamName
//         /* REFACTORED ADD TEAM NAME TO ARRAY */
//         arrTeamNames.push(secondLevel.teamName)
//         console.log(arrTeamNames)
//     } 
//     console.log(`Return: ${arrTeamNames}`)   
//     return arrTeamNames
// }
// /* TEST teamNames()*/
// teamNames()

/* #5 playerNumbers */
/* 
input: team name
output: array of team jersey numbers
*/
function playerNumbers(teamName) {
    debugger
    let game = gameObject()

    // Access gameObject() object and assign as game.
    // Iterate through game object to get keys.
    // Use game[topLevelKeys].players[playerNames].number
    
    // e.g.
    // const playerAlanAnderson = game.home.players["Alan Anderson"].number
    // console.log(playerAlanAnderson)
    // const playerBenGordon = game.away.players["Ben Gordon"].number
    // console.log(playerBenGordon)

    const arrJerseyNumbers = []
    for (let topLevelKey in game) {
        // console.log(game[topLevelKey].teamName)
        if (game[topLevelKey].teamName === teamName) {
            // console.log("Found: "+ game[topLevelKey].teamName)
            let secondLevel = game[topLevelKey]
            for (let secondLevelKey in secondLevel.players) {
                // console.log(secondLevelKey)
                let jerseyNumber = secondLevel.players[secondLevelKey].number
                /* 1ST VERSION USING [ARR.LENGTH] */
                // arrJerseyNumbers[arrJerseyNumbers.length] = jerseyNumber
                /* REFACTORED USING ARR.PUSH() */
                arrJerseyNumbers.push(jerseyNumber)
                // console.log(arrJerseyNumbers)
            }

        }

    }
    console.log("Returning: " + arrJerseyNumbers)
    return arrJerseyNumbers
}
/* TEST playerNumbers() */
// playerNumbers("Brooklyn Nets")
// playerNumbers("Charlotte Hornets")


/* #6 playerStats */
/* 
input: player's name
output: object of player's stats
*/
function playerStats(playerName) {
    debugger
    let game = gameObject()

    // Access gameObject() object and assign as game.
    // Iterate through game object to get keys.
    // Use game[topLevelKeys].players[playerNames]
    
    // e.g.
    // const playerAlanAnderson = game.home.players["Alan Anderson"]
    // console.log(playerAlanAnderson)
    // const playerBenGordon = game.away.players["Ben Gordon"]
    // console.log(playerBenGordon)

    for (let topLevelKey in game) {
        console.log(game[topLevelKey])
            let secondLevel = game[topLevelKey]
            for (let secondLevelKey in secondLevel.players) {
                console.log(secondLevelKey)
                if (secondLevelKey === playerName) {
                    let objPlayerStats = secondLevel.players[secondLevelKey]
                    console.log(objPlayerStats)
                    return objPlayerStats
                }
            }
    }
}
/* TEST playerStats() */
// playerStats()
// playerStats("Alan Anderson")
playerStats("Jeff Adrien")



/* #7 bigShoeRebounds */



function gameObject() {
    return {
        "home":{"teamName": "Brooklyn Nets",
                "colors": ["Black", "White"],
                "players": {
                    "Alan Anderson":{
                        "number":0,
                        "shoe":16,
                        "points":22,
                        "rebounds":12,
                        "assists":12,
                        "steals":3,
                        "blocks":1,
                        "slamDunks":1
                    },
                    "Reggie Evans":{
                        "number":30,
                        "shoe":14,
                        "points":12,
                        "rebounds":12,
                        "assists":12,
                        "steals":12,
                        "blocks":12,
                        "slamDunks":7
                    },
                    "Brook Lopez":{
                        "number":11,
                        "shoe":17,
                        "points":17,
                        "rebounds":19,
                        "assists":10,
                        "steals":3,
                        "blocks":1,
                        "slamDunks":15
                    },
                    "Mason Plumlee":{
                        "number":1,
                        "shoe":19,
                        "points":26,
                        "rebounds":12,
                        "assists":6,
                        "steals":3,
                        "blocks":8,
                        "slamDunks":5
                    },
                    "Jason Terry":{
                        "number":31,
                        "shoe":15,
                        "points":19,
                        "rebounds":2,
                        "assists":2,
                        "steals":4,
                        "blocks":11,
                        "slamDunks":1
                    }
                }
        },
        "away":{"teamName": "Charlotte Hornets",
                "colors": ["Turquoise", "Purple"],
                "players": {
                    "Jeff Adrien":{
                        "number":4,
                        "shoe":18,
                        "points":10,
                        "rebounds":1,
                        "assists":1,
                        "steals":2,
                        "blocks":7,
                        "slamDunks":2
                    },
                    "Bismak Biyombo":{
                        "number":0,
                        "shoe":16,
                        "points":12,
                        "rebounds":4,
                        "assists":7,
                        "steals":7,
                        "blocks":15,
                        "slamDunks":10
                    },
                    "DeSagna Diop":{
                        "number":2,
                        "shoe":14,
                        "points":24,
                        "rebounds":12,
                        "assists":12,
                        "steals":4,
                        "blocks":5,
                        "slamDunks":5
                    },
                    "Ben Gordon":{
                        "number":8,
                        "shoe":15,
                        "points":33,
                        "rebounds":3,
                        "assists":2,
                        "steals":1,
                        "blocks":1,
                        "slamDunks":0
                    },
                    "Brendan Haywood":{
                        "number":33,
                        "shoe":15,
                        "points":6,
                        "rebounds":12,
                        "assists":12,
                        "steals":22,
                        "blocks":5,
                        "slamDunks":12
                    }
                }
        }
    }
}
// football-data.org api key
// var apiKey = '285395182cb047ac953fe9c44c44aa1b';

// var groupA = $('#group-1');
// var groupB = $('#group-2');
// var groupC = $('#group-3');
// var groupD = $('#group-4');
// var groupE = $('#group-5');
// var groupF = $('#group-6');
// var groupG = $('#group-7');
// var groupH = $('#group-8');

function groupPoints() {
  var apiUrl = 'https://world-cup.codsfli.com/points.php';

  fetch(apiUrl)

    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      for (let j = 0; j < 9; j++) {
        var group = $("#group-" + j);
        for (let i = 0; i < 4; i++) {

          var teamRow = $("<tr>");
          teamRow.addClass('team-a-1');
          teamRow.append($("<td>").html("<div class='match-card-flag d-flex'><img class='flag-icon' src='" + response[j].teams[i].flag + "' alt=''><span id='team'>" + response[j].teams[i].Team + "</span></div>"));
          teamRow.append($("<td>").text(response[j].teams[i].match_play));
          teamRow.append($("<td>").text(response[j].teams[i].win));
          teamRow.append($("<td>").text(response[j].teams[i].draw));
          teamRow.append($("<td>").text(response[j].teams[i].loss));
          teamRow.append($("<td>").text(response[j].teams[i].points))
          group.append(teamRow);
        }
      }
      // Sorts Teams
      //  var teams = [  {    "position": 1,    "name": "Team A",    "mp": 3,    "w": 2,    "d": 1,    "l": 0,    "pts": 7  },  {    "position": 2,    "name": "Team B",    "mp": 3,    "w": 1,    "d": 2,    "l": 0,    "pts": 5  },  {    "position": 3,    "name": "Team C",    "mp": 3,    "w": 1,    "d": 1,    "l": 1,    "pts": 4  },  {    "position": 4,    "name": "Team D",    "mp": 3,    "w": 0,    "d": 0,    "l": 3,    "pts": 0  }]

      //   // Sort the teams array by position in descending order
      //   teams.sort(function (a, b) {
      //     return a.position - b.position;
      //   });
      //   console.log(teams)
    })
    .catch(function (error) {
      console.error(error);
    });
}

groupPoints();

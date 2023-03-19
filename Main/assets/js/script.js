
// football-data.org api key
// var apiKey = '285395182cb047ac953fe9c44c44aa1b';

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

      for (let j = 0; j < 8; j++) {
        var group = $("#group-" + j);
        
        var teams = response[j].teams.sort(function(a, b) {
          return a.position - b.position;
        });
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
    })
    .catch(function (error) {
      console.error(error);
    });
}





// Google Maps Platform API Key AIzaSyAD9Rn3XzuMwHX5UJg2XHhobvxnQj1yiVQ
  function initMap() {
    var qatar = {lat: 25.3089, lng: 51.5283389031074};
     var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: qatar
    });
  }

  groupPoints();
  initMap();
// football-data.org api key
// var apiKey = '285395182cb047ac953fe9c44c44aa1b';

var groupA = $('#group-a');
var groupB= $('#group-b');
var groupC = $('#group-c');
var groupD = $('#group-d');
var groupE = $('#group-e');
var groupF = $('#group-f');
var groupG = $('#group-g');
var groupH = $('#group-h');

function groupPoints() {
  var apiUrl = 'https://world-cup.codsfli.com/points.php';

  fetch(apiUrl)

  .then(function(response) {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    var groupATeam1 = $('#group-a span#team:first');
    var groupATeam1Flag = $('#group-a img.flag-icon:first');
    var groupATeam1Mp = $('#group-a td#mp:first');
    var groupATeam1W = $('#group-a td#w:first');
    var groupATeam1D = $('#group-a td#d:first');
    var groupATeam1L = $('#group-a td#l:first');
    var groupATeam1Pts = $('#group-a td#pts:first');

    groupATeam1.text(response[0].teams[0].Team);
    groupATeam1Flag.attr('src', response[0].teams[0].flag);
    groupATeam1Mp.text(response[0].teams[0].match_play);
    groupATeam1W.text(response[0].teams[0].win);
    groupATeam1D.text(response[0].teams[0].draw);
    groupATeam1L.text(response[0].teams[0].loss);
    groupATeam1Pts.text(response[0].teams[0].points);

    var groupATeam2 = $('#group-a span#team:eq(1)');
    var groupATeam2Flag = $('#group-a img.flag-icon:eq(1)');
    var groupATeam2Mp = $('#group-a td#mp:eq(1)');
    var groupATeam2W = $('#group-a td#w:eq(1)');
    var groupATeam2D = $('#group-a td#d:eq(1)');
    var groupATeam2L = $('#group-a td#l:eq(1)');
    var groupATeam2Pts = $('#group-a td#pts:eq(1)');

    groupATeam2.text(response[0].teams[1].Team);
    groupATeam2Flag.attr('src', response[0].teams[1].flag);
    groupATeam2Mp.text(response[0].teams[1].match_play);
    groupATeam2W.text(response[0].teams[1].win);
    groupATeam2D.text(response[0].teams[1].draw);
    groupATeam2L.text(response[0].teams[1].loss);
    groupATeam2Pts.text(response[0].teams[1].points);

    var groupATeam3 = $('#group-a span#team:eq(2)');
    var groupATeam3Flag = $('#group-a img.flag-icon:eq(2)');
    var groupATeam3Mp = $('#group-a td#mp:eq(2)');
    var groupATeam3W = $('#group-a td#w:eq(2)');
    var groupATeam3D = $('#group-a td#d:eq(2)');
    var groupATeam3L = $('#group-a td#l:eq(2)');
    var groupATeam3Pts = $('#group-a td#pts:eq(2)');

    groupATeam3.text(response[0].teams[2].Team);
    groupATeam3Flag.attr('src', response[0].teams[2].flag);
    groupATeam3Mp.text(response[0].teams[2].match_play);
    groupATeam3W.text(response[0].teams[2].win);
    groupATeam3D.text(response[0].teams[2].draw);
    groupATeam3L.text(response[0].teams[2].loss);
    groupATeam3Pts.text(response[0].teams[2].points);

    var groupATeam4 = $('#group-a span#team:eq(3)');
    var groupATeam4Flag = $('#group-a img.flag-icon:eq(3)');
    var groupATeam4Mp = $('#group-a td#mp:eq(3)');
    var groupATeam4W = $('#group-a td#w:eq(3)');
    var groupATeam4D = $('#group-a td#d:eq(3)');
    var groupATeam4L = $('#group-a td#l:eq(3)');
    var groupATeam4Pts = $('#group-a td#pts:eq(3)');

    groupATeam4.text(response[0].teams[3].Team);
    groupATeam4Flag.attr('src', response[0].teams[3].flag);
    groupATeam4Mp.text(response[0].teams[3].match_play);
    groupATeam4W.text(response[0].teams[3].win);
    groupATeam4D.text(response[0].teams[3].draw);
    groupATeam4L.text(response[0].teams[3].loss);
    groupATeam4Pts.text(response[0].teams[3].points);
  })
  .catch(function(error) {
    console.error(error);
  });
}

groupPoints();

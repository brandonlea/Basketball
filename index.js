let team1 = document.getElementById("team-1");
let team2 = document.getElementById("team-2");

let score1 = 0;
let score2 = 0;

function addScore(team, amount) {
  if (team === 1) {
    score1 += amount;
    team1.textContent = score1;
  } else {
    score2 += amount;
    team2.textContent = score2;
  }
}

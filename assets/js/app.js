function createGame(player1, hour, player2) {
  return `
  <li><img src="./assets/components/flags/icon-${player1}.svg" alt="Flag of ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/components/flags/icon-${player2}.svg" alt="Flag of ${player2}">
  </li>
      
  `;
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2> 
    <ul>
      ${games}
    </ul>
    </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard("21/11", "Quinta", createGame("brazil", "16:00", "cameroon"))
   +
  createCard("28/11", "Segunda", createGame("argentina", "18:00", "hungary")) +
  createCard("02/11", "sexta", createGame("argentina", "18:00", "hungary"));

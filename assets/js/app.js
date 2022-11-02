function header() {
  return `<img src="./assets/components/logo.svg" alt="">`;
}
function createGame(player1, hour, player2) {
  return `
  <li><img src="./assets/components/icon-${player1}.svg" alt="Flag of ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/components/icon-${player2}.svg" alt="Flag of ${player2}">
      </li>
  `;
}
function createCard(date, day, games) {
  return `
  <div class="card">
  <div class="card-info">
    <img src="./assets/components/arrow-left.svg" alt="" width="30" class="img-app">
    <h2>${date}<span>${day}</span></h2>
    <img src="./assets/components/arrow-right.svg" alt="" width="30" class="img-app">
  </div>
  <div class="card-games">
    <ul>
      ${games}
    </ul>
    </div>
  </div>
  `;
}

document.querySelector("#app").innerHTML = ` 
<header>
${header()}
</header>

<main id="cards">
${createCard("24/11", "Quinta", 
createGame('brazil', '16:00', 'cameroon')
)}
${createCard("28/11", "Segunda",
createGame('argentina', '18:00', 'hungary')
)}
${createCard("02/11", "sexta", 
createGame('argentina', '18:00', 'hungary')
)}
</main>
`;

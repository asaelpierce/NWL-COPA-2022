function createGames(player1, hour, player2){
    return `
    
    <li>
    <img src="/assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong> ${hour}</strong>
    <img src="/assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
</li>
    
    `
}
function createCard(date, day, games) {
return `
<div class="card">
    <h2>${date} <span> ${day}</span></h2>
<ul>
${games}

</ul>
</div>

  `
}

document.querySelector('#app') .innerHTML = `
<header>
<img src="./assets/logo.svg" alt="">
</header>
<main id="cards">

  ${createCard("24/11" , "quinta",
   createGames('switzer', '07:00', 'cameroon') +
   createGames('uruguay', '10:00', 'coreadosul') +
   createGames('portugal', '13:00', 'ghana')+
   createGames('brazil', '16:00', 'serbia')
   
  )}
  ${createCard("28/11" , "segunda",
  createGames('cameroon', '07:00', 'serbia') +
  createGames('coreadosul', '10:00', 'ghana') + 
  createGames('brazil', '13:00', 'switzer') +
  createGames('portugal', '16:00', 'uruguay')
  )}
  ${createCard("02/12" , "sexta", 
  createGames('coreadosul', '12:00', 'portugal') +
  createGames('ghana', '13:00', 'uruguay') +
  createGames('cameroon', '16:00', 'brazil') +
  createGames('serbia', '16:00', 'switzer')

  )}

  </main>
`
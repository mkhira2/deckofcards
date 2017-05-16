var containerNode = document.querySelector('.container')
var deal = document.querySelector('.deal')

var handleResponse = function(apiResponse) {
  var cardOne = apiResponse.cards[0].image
  var cardTwo = apiResponse.cards[1].image
  var cardOneValue = apiResponse.cards[0].value
  var cardTwoValue = apiResponse.cards[1].value

  if (cardOneValue === 'JACK') {
    cardOneValue = 11
  }
  if (cardTwoValue === 'JACK') {
    cardTwoValue = 11
  }
  if (cardOneValue === 'QUEEN') {
    cardOneValue = 12
  }
  if (cardTwoValue === 'QUEEN') {
    cardTwoValue = 12
  }
  if (cardOneValue === 'KING') {
    cardOneValue = 13
  }
  if (cardTwoValue === 'KING') {
    cardTwoValue = 13
  }
  if (cardOneValue === 'ACE') {
    cardOneValue = 14
  }
  if (cardTwoValue === 'ACE') {
    cardTwoValue = 14
  }

  else {
    cardOneValue = parseInt(cardOneValue)
    cardTwoValue = parseInt(cardTwoValue)
  }
  console.log(cardOneValue)
  console.log(cardTwoValue);


  console.log(apiResponse.cards)
  containerNode.innerHTML = '<div class="cardBoxes"><div class="firstBox"><p>Player One: </p><img class="card cardOne" src=' + cardOne + '></div>' +
                            '<div class="secondBox"><p>Player Two: </p><img class="card cardTwo" src=' + cardTwo + '></div></div>'

  if (cardOneValue > cardTwoValue) {
    containerNode.innerHTML += '<div class="winner">Player One Wins!</div>'
  }
  else if (cardOneValue < cardTwoValue) {
    containerNode.innerHTML += '<div class="winner">Player Two Wins!</div>'
  }
  else if (cardOneValue === cardTwoValue)
  containerNode.innerHTML += '<div class="winner">It\'s a tie!'
}

function getCards(url) {
  $.getJSON(url).then(handleResponse)
}

var containerNode = document.querySelector('.container')
var deal = document.querySelector('.deal')

var handleResponse = function(apiResponse) {
  var cardOne = apiResponse.cards[0].image
  var cardTwo = apiResponse.cards[1].image
  var cardOneValue = apiResponse.cards[0].value
  var cardTwoValue = apiResponse.cards[1].value

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

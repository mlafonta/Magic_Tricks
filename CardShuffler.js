const shuffleCards = () => {
    const cards = []
    for(var i = 0; i < 52; i++) {
        var rand = Math.floor(Math.random() * 10) % 2
        if(cards.filter((x) => x == "Red").length != 26 && rand == 1) {    
            cards.push("Red")
        } else if(cards.filter((x) => x == "Black").length != 26) {
            cards.push("Black")
        } else {
            cards.push("Red")
        }
    }

    return cards
}
var deck = shuffle()
console.log(deck)
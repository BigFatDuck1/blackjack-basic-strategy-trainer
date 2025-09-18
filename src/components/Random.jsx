
const random_index = (array) => [Math.floor(Math.random() * array.length)]

const available_cards = [2,3,4,5,6,7,8,9,10,"A"];

function returnCards() {
    const card1 = available_cards[random_index(available_cards)];
    const card2 = available_cards[random_index(available_cards)];
    const card3 = available_cards[random_index(available_cards)];

    return (
        [card1, card2, card3]
    )
}

console.log(returnCards());

export default returnCards;
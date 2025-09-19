
const random_index = (array) => [Math.floor(Math.random() * array.length)]

const available_cards = [2,3,4,5,6,7,8,9,10,"A"];
const equivalent_to_10 = [10, "J", "Q", "K"];
const suites = ["♥", "♦", "♠", "♣"];

function checkBlackjack(card1, card2) {
    if ((card1 === "A" && equivalent_to_10.includes(card2)) || (card2 === "A" && equivalent_to_10.includes(card1))) {
        return true;
    }
    return false;
}

function generatePlayerTotal(card1, card2) {
    // Pair ace
    if (card1 === "A" && card2 === "A") 
        return 12;
    // Hard aces
    else if (card1 === "A" || card2 === "A") {
        if (card1 === "A") {
            return 11 + card2;
        }
        else {
            return 11 + card1;
        }
    }
    // Normal 2 cards
    else {
        return card1 + card2;
    }    
}

function returnCards() { 
    const card1 = available_cards[random_index(available_cards)];
    const card2 = available_cards[random_index(available_cards)];
    const card3 = available_cards[random_index(available_cards)];
    const total = generatePlayerTotal(card1, card2);
    if (checkBlackjack(card1, card2) == true) {
        returnCards();
        return;
    }
    else {};
    generatePlayerTotal(total);
    const obj = {
        player_card1_string: `${suites[random_index(suites)]} ${card1}`,
        player_card2_string: `${suites[random_index(suites)]} ${card2}`,
        dealer_card_string: `${suites[random_index(suites)]} ${card3}`,
        player_total: total,
        dealer_total: card3,
    };

    return obj;
}

console.log(returnCards());

export default returnCards;
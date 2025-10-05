import AnswerCheck from "./AnswerCheck";

const random_index = (array) => Math.floor(Math.random() * array.length);

const available_cards = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];
const suites = ["♥", "♦", "♠", "♣"];

function returnCards() { 
    const card1 = available_cards[random_index(available_cards)]; //Player
    const card2 = available_cards[random_index(available_cards)]; //Player
    const card3 = available_cards[random_index(available_cards)]; //Dealer
    const card1suit = suites[random_index(suites)];
    const card2suit = suites[random_index(suites)];
    const card3suit = suites[random_index(suites)];

    if (checkBlackjack(card1, card2) == true) {
        console.log("Blackjack, redraw");
        return returnCards();
    }
    else {
        const obj = {
            player_card1_string: `${card1suit} ${card1}`,
            player_card2_string: `${card2suit} ${card2}`,
            dealer_card_string: `${card3suit} ${card3}`,
            //answer = "Hit" / "Stand" / "Double" / "Split"

        }

        obj.answer = AnswerCheck(card3, card1, card2);
        if (obj.answer == "NA") {
            return returnCards();
        }

        return obj;
    };
}

export default returnCards;
import AnswerCheck from "./AnswerCheck";

//Basically easy version where only Hit/Stand is tested

const random_index = (array) => Math.floor(Math.random() * array.length);

const equivalent_to_10 = [10, "J", "Q", "K"];
const suites = ["♥", "♦", "♠", "♣"];

const all_array = [
    [9, 6, 8, "H"],
]

function parseArray (big_array) {

    let obj = {};

    const array = big_array[random_index(big_array)];

    const card1suit = suites[random_index(suites)];
    const card2suit = suites[random_index(suites)];
    const card3suit = suites[random_index(suites)];

    let card1 = array[0];
    let card2 = array[1];
    let card3 = array[2];

    const tenRandomizer = (card) => {
        if (card == 10) {
            return equivalent_to_10[random_index(equivalent_to_10)];
        }
        else return card;
    }

    card1 = tenRandomizer(card1); 
    card2 = tenRandomizer(card2);
    card3 = tenRandomizer(card3);

    return obj = {
        player_card1_string: `${card1suit} ${card1}`,
        player_card2_string: `${card2suit} ${card2}`,
        dealer_card_string: `${card3suit} ${card3}`,
        answer: `${array[3] == "H" ? "Hit" : "Stand"}`,
    }
}


function returnCards() { 
    const obj = parseArray(all_array);
    return obj;
}

export default returnCards;
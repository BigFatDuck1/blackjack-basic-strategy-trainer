import AnswerCheck from "./AnswerCheck";

//Basically easy version where only Hit/Stand is tested

const random_index = (array) => Math.floor(Math.random() * array.length);

const equivalent_to_10 = [10, "J", "Q", "K"];
const suites = ["♥", "♦", "♠", "♣"];

const all_array = [
    [9, 6, 8, "H"],
    [9, 7, 5, "S"],
    [7, 5, 3, "H"],
    [7, 2, 10, "H"],
    [6, 3, 7, "H"],
    [9, 3, 3, "H"],
    [10, 7, 4, "S"],
    [9, 3, 5, "S"],
    [10, 2, 3, "H"],
    [10, 2, 2, "H"],
    [10, 3, 3, "S"],
    [10, 3, 4, "S"],
    [10, 7, 2, "S"],
    [10, 5, 7, "H"],
    [10, 6, 9, "H"],
    [10, 6, 10, "H"],
    [7, 6, 3, "S"],
    [8, 7, 9, "H"],
    [9, 7, 10, "H"],
    [10, 4, 2, "S"]
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

    obj = {
        player_card1_string: `${card1suit} ${card1}`,
        player_card2_string: `${card2suit} ${card2}`,
        dealer_card_string: `${card3suit} ${card3}`,
        answer: `${array[3] == "H" ? "Hit" : "Stand"}`,
    }
    return obj;
}


function returnCards() { 
    const obj = parseArray(all_array);
    return obj;
}

export default returnCards;
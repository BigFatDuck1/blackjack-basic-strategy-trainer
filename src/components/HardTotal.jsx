import AnswerCheck from "./AnswerCheck";

//Hard Totals only

const random_index = (array) => Math.floor(Math.random() * array.length);

const equivalent_to_10 = [10, "J", "Q", "K"];
const suites = ["♥", "♦", "♠", "♣"];

const all_array = [
[7, 4, "T", "D"],
[6, 3, 7, "H"],
[9, 2, "T", "D"],
[8, 3, 7, "D"],
[6, 5, 6, "D"],
[7, 4, "A", "H"],
[5, 4, 6, "D"],
[6, 4, "T", "H"],
[8, 3, "A", "H"],
[6, 5, 2, "D"],
[6, 3, 2, "H"],
[7, 4, 9, "D"],
[5, 4, 8, "H"],
[8, 2, 9, "D"],
[8, 3, "T", "D"],
[7, 3, 2, "D"],
[5, 4, 2, "H"],
[7, 2, 7, "H"],
[6, 5, "A", "H"],
[8, 2, "T", "H"]
];

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
        answer: `${array[3] == "H" ? "Hit" : "Double"}`,
    }
    return obj;
}


function returnCards() { 
    const obj = parseArray(all_array);
    return obj;
}

export default returnCards;
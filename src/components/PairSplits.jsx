import AnswerCheck from "./AnswerCheck";

//Pair splits only

const random_index = (array) => Math.floor(Math.random() * array.length);

const equivalent_to_10 = [10, "J", "Q", "K"];
const suites = ["♥", "♦", "♠", "♣"];

const all_array = [
[6, 6, 2, "Split"],
[2, 2, 7, "Split"],
[2, 2, 6, "Split"],
[9, 9, 7, "S"],
["A", "A", "A", "Split"],
[8, 8, "T", "Split"],
[3, 3, 4, "Split"],
[7, 7, 7, "Split"],
[9, 9, 9, "Split"],
[6, 6, 6, "Split"],
[4, 4, 6, "Split"],
[4, 4, 4, "H"],
[2, 2, 2, "Split"],
[6, 6, 7, "Hit"],
[8, 8, "A", "Split"],
[7, 7, 6, "Split"],
[9, 9, 8, "Split"],
[8, 8, 8, "Split"],
[3, 3, 7, "Split"],
[4, 4, 5, "Split"]
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

    let answer3 = array[3];
    switch(array[3]) {
        case ("H"):
            answer3 = "Hit";
            break;
        case ("Split"):
            answer3 = "Split";
            break;
        case ("S"):
            answer3 = "Stand";
            break;
    }

    obj = {
        player_card1_string: `${card1suit} ${card1}`,
        player_card2_string: `${card2suit} ${card2}`,
        dealer_card_string: `${card3suit} ${card3}`,
        answer: `${answer3}`,
    }
    return obj;
}


function returnCards() { 
    const obj = parseArray(all_array);
    return obj;
}

export default returnCards;
import React from "react";

function AnswerCheck(d1, p1, p2) {

    //All aces are soft and count as 11 in two card hand
    if (p1 == "A" && p2 == "A") {
        if (p1 == "A") {
            p1 = 11;
        }
        if (p2 == "A") {
            p2 = 11;
        }
    }

    //All totals 17 or higher = stand
    if (p1 + p2 >= 17) {
        return "Stand"; 
    }

    //If dealer 7, 8, 9, T, A, hit until larger than or equal 17
    if ([7,8,9,10,"J","Q","K","A"].includes(d1)) {
        if (p1 + p2 < 17) {
            return "Hit";
        }
        else {
            return "Stand";
        }
    } 

    //Stand on hard totals of 13, 14, 15, 16 vs. dealer upcard of 2, 3, 4, 5, 6; otherwise hit.
    if ([2,3,4,5,6].includes(d1) && [13,14,15,16].includes(p1 + p2)) {
        return "Stand";
    }
    else if ([2,3,4,5,6].includes(d1) && (p1 + p2 < 13)) {
        return "Hit";
    }

    //Stand on hard total of 12 vs. dealer upcard of 4, 5, 6; otherwise hit.
    if ([4,5,6].includes(d1) && (p1 + p2 == 12)) {
        return "Stand";
    }

    return "NA"; //default
}

export default AnswerCheck;
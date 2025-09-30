import React from "react";

function AnswerCheck(d1, p1, p2) {

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



    return "Answer not determined"; //default
}

export default AnswerCheck;
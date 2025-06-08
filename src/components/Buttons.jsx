import React from "react";
//import { useState } from "react";

function Buttons() {

    return (
        <div className="options">
            <Click name="Hit" />
            <Click name="Stand" />
            <Click name="Split" />
            <Click name="Double" />
        </div>
    )
}

function Click({ name }) {

    function handleClick() {
        console.log("Click");
        alert(name);
    }

    return (
        <button className={`${name} option_box`} onClick={handleClick} >{name}</button>
    )
}

export default Buttons;
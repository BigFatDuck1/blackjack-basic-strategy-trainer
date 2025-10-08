import React from 'react'
import { useState } from 'react'
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog'
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';


//HitStand
//HardTotal
//SoftTotal
//PairSplit
//Random

const excerpt = {
    //HitStand
    HitStand:
    `* Stand on all hard totals of 17 and higher.
    * When the dealer is showing an upcard of 7, 8, 9, T, A, hit all hands until your cards total 17 or higher.
    * Stand on hard totals of 13, 14, 15, 16 vs. dealer upcard of 2, 3, 4, 5, 6; otherwise hit.
    * Stand on hard total of 12 vs. dealer upcard of 4, 5, 6; otherwise hit.`,
    
    HardTotal: 
    `* Double down on all hard totals of 11 vs. dealer upcard of 2,3, 4, 5, 6, 7, 8, 9, T; otherwise hit.
     * Double down on all hard totals of 10 vs. dealer upcard of 2, 3, 4, 5, 6, 7, 8, 9; otherwise hit.
     * Double down on all hard totals of 9 vs. dealer upcard of 3, 4, 5, 6; otherwise hit.`,
     
    SoftTotal:
    `* Double down on A,2 or A,3 vs. dealer upcard of 5 or 6; otherwise hit.
     * Double down on A/4 or A,5 vs. dealer upcard of 4, 5, 6; otherwise hit.
     * Double down on A,6 or A,7 vs. dealer upcard of 3, 4, 5, 6; otherwise hit (except stand with an A,7 vs. dealer upcard of 2, 7, or 8).`,
    
    PairSplit:
    `* Always split A,A or 8,8.
     * Never split T,T or 5,5.
     * Split 2,2; 3,3; and 7,7 vs. dealer upcard of 2, 3, 4, 5, 6, 7; otherwise hit.
     * Split 4,4 vs. dealer upcard of 5 or 6, otherwise hit.
     * Split 6,6 vs. dealer upcard of 2, 3, 4, 5, 6; otherwise hit.
     * Split 9,9 vs. dealer upcard of 2, 3, 4, 5, 6, 8, 9 (not 7); otherwise stand.`,
    
    Random:
    `Basic strategy.`
}


function Hint({ hint, showHint, which_hint }) {

    const [child_hint, setChildHint] = useState(which_hint); //This is internal state only visible to hint, inherits parents App.jsx
    const [old_whichHint, setOld_whichHint] = useState(which_hint); //This is used to check whether App.jsx changed global which_hint (i.e. dropdown menu changed)
    //Initialized with which_hint on first render

    if (which_hint != old_whichHint) { //Global which_hint updated because user toggled dropdown menu
        setOld_whichHint(which_hint); //Update old_whichHint to new which_hint
        setChildHint(which_hint); //Update child_hint to new which_hint
    }

    const menu_items = [
        {
            label: "Hit / Stand",
            command: () => {setChildHint("HitStand")},
        },
        {
            label: "Hard Total",
            command: () => {setChildHint("HardTotal")},
        },
        {
            label: "Soft Total",
            command: () => {setChildHint("SoftTotal")},
        },
        {
            label: "Splitting pairs",
            command: () => {setChildHint("PairSplit")},
        },
        {
            label: "Full basic strategy",
            command: () => {setChildHint("Random")},
        },
    ]

    return (
        <Dialog id="hint_dialog" header={child_hint} visible={hint} style={{ width: '50vw' }} onHide={() => {if (!hint) return; showHint(false); }}>
                        <Menubar model={menu_items} />
                        <p className="m-0">
                            {excerpt[child_hint]}
                        </p>
        </Dialog>
    )
}
export default Hint;
import { useState } from "react"
import PadsData from "./PadData"
import Pad from "./Pad"
import "./Pad.css"

export default function SoundPadChallenge(){
    const [pads, setPads] = useState(PadsData)

    function handleButtonClick(id){
        let newPads = pads.map((pad) => {
            if(pad.id === id){
                return {...pad, on: !pad.on}
            } else {
                return pad
            }
        })

        setPads(newPads);
    }
    
    let padElement = pads.map((pad) => (<
        Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} handleClick={handleButtonClick}/>
    ))
    
    return <section>
        {padElement}
    </section>
}
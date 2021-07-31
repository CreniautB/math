import React from 'react'

function EndGame({note}) {

    function calculNote(note){
        return  parseFloat(note * 20 / 109).toFixed(2)
    }

    return(
        <div>
            <h1>Bravo, venez de finir l'exercice</h1>
            <h2>Vous avez obtneu la note de : {calculNote(note)}</h2>
        </div>
    )

}

export default EndGame


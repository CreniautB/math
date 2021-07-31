import React, {useState, useEffect} from 'react'
import Square from '../square/square'
import _ from "lodash";
import './level.css'
import sendList from './list';
import Timer from '../../../node_modules/react-compound-timer'
import EndGame from '../endGame/endGame';

function Level({level, chrono}) {
   
    const [tour, setTour] = useState(0)
    const [note, setNote] = useState(0)

    console.log(note)
    
    let actualList = sendList(level)

    function randomList(actualList){
        for(var i =actualList.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) ); //random index
            [actualList[i],actualList[j]]=[actualList[j],actualList[i]]; // swap
        }
    }
    randomList(actualList);
   
    function getAnswer(num, e) {
        let question =  Number(actualList[tour][1])
        if(question === num){
            e.target.style.background="green"
            setNote(note + 1)
        }
        else {
        if (e.target.style.background==="green"){
                setNote(note - 1)
            }
            e.target.style.background="red"
        }
        setTour(tour +1)
    }

    if (tour === 109 ){
        return( 
            <EndGame note={note} />
        )
    }

    return ( 

        <div className="mainLevel">
            <button className="calcul">{actualList[tour][0]}</button>
            <div className="squareContainer">
                {_.times(110, (i) => (
                <Square key={i} num={i} getAnswer={getAnswer}/>
            ))}
            </div>
            <button className="time">
            <span>Il vous reste </span>
            <Timer
                    initialTime={chrono}
                    direction="backward"
                    checkpoints={[
                        {
                            time: 0,
                            callback: () => setTour(109)
                        }
                    ]}
                >
                    {() => (
                        <React.Fragment>
                            <Timer.Minutes/>: 
                            <Timer.Seconds/>
                        </React.Fragment>
                    )}
                </Timer>
            </button>
        </div>
    
    )
}


export default Level


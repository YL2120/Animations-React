import React from 'react'
import "./Liste.css"
import { useTrail, animated } from 'react-spring'
import Card from "../../Components/Card/Card"
import {v4 as uuidv4} from "uuid";

export default function Liste() {
    
        const trail = useTrail(9, { //1er param : nb d'éléments que j'ai envie d'animer 2nd param: le style
            from: {
                opacity: 0,
                x:20
            },
            to: {
                opacity: 1,
                x: 0
            }
        })

        console.log(trail)
        return (
        <div className='list-container'>
            {trail.map((cardStyle,index) => {
                return <animated.div
                key={uuidv4()}
                style={cardStyle}> {/* "animated": pour animer l'élément */}

                <Card />
                </animated.div>
            })}
        </div>
    )
}

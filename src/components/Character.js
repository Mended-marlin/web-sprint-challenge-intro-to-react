import React from "react"


export default function Character(props) {
    const {character} = props
    console.log(character)
    if(!character) {
        return (<div>... loading ...</div>)

    }
    return (
        <div className="character">
            <h3>{character.name}</h3>
            
        </div>
    )
}

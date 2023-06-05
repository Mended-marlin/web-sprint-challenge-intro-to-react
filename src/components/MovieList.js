import React from "react";

export default function MovieList(props){

    const {character} = props
    

    return (
        character.films ? <div className="relatedFilms">{character.films}</div> : <div>... Loading ...</div>
    )

}
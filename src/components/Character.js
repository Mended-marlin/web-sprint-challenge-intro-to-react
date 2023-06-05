import {React, useState} from "react"
import MovieList from "./MovieList"
import Bio from "./Bio"


export default function Character(props) {
    const {character} = props

    const [movieToggle, setToggle] = useState(false)


    function showMovies() {
        setToggle(!movieToggle)
    }


    if(!character) {
        return (<div>... loading ...</div>)

    }
    return (
        <div className="character">
            <Bio name={character.name} birthYear={character.birth_year} species={character.species} vehicles={character.vehicles} />

            {movieToggle && <MovieList character={character}/>}

            {movieToggle ? <button onClick={showMovies}>Hide</button> : <button onClick={showMovies}>Related Movies</button>}
        </div>
    )
}

import {React, useEffect, useState} from 'react'
import axios from "axios"






export default function Bio(props) {
    const {data, name, birthYear, species, vehicles  } = props

    const [rides, setRides] = useState(null)

    

    return (
        <div className="bio">
        <h2>{name}</h2>
        {/* <Details /> */}
        </div>
    )
}
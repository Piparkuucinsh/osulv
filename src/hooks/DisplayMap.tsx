import React from 'react'
import { mapdata } from './../../data/map';
import MapPiece from "../components/MapPiece"


function DisplayMap() {
    return (
        <div>
            {
                mapdata.map((info, i: number) => {
                    return(
                        <MapPiece 
                            key={i}
                            info={info}
                        />
                    )
                })
            }
        </div>
    )
}

export default DisplayMap

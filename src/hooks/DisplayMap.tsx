import React from 'react'
import { mapdata } from './../../data/map';

function DisplayMap() {
    return (
        <div>
            {
                mapdata.map((data, i: number) => {
                    return(
                        <div className="">
                            <img className="absolute" src={data.image} alt="state" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayMap

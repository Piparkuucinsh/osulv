import React, {useEffect, useState} from 'react'
import { rankingData } from '../../data/ranking';

const MapPiece: React.FC<any> = ({info}) => {
    const [players] = useState<any>([]);
    const [topPlayer, setTopPlayer] = useState<any>(null);

    useEffect(() => {
        if(info.players){
            rankingData.ranking.forEach((ranking) => {
                info.players.forEach((player: any) => {
                    if(player === ranking.user.username){
                        players.push(ranking)
                    }
                })
            });
        }
    }, [info.players, players]);

    useEffect(() => {
        if(players.length > 0){
            setTopPlayer(players.sort((a: any, b: any) => {return a.pp - b.pp})[0])
        }
    }, [players, topPlayer]);

    console.log(topPlayer)

    if(topPlayer){
        return (
            <div className="absolute flex items-start justify-start">
                <div className="">
                    <h3>#{topPlayer.global_rank}</h3>
                    <img src={topPlayer.user.avatar_url} alt="user" />
                </div>
                <img className="" src={info.image} alt="country state borders" />
            </div>
        )
    }
    return null;
}

export default MapPiece

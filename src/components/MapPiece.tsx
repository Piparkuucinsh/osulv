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

    if(topPlayer){
        return (
            <div className="absolute flex items-start justify-start w-full h-screen">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-40 h-40">
                        <h3 className="">#{topPlayer.global_rank}</h3>
                        <img className="" src={topPlayer.user.avatar_url} alt="user" />
                    </div>
                    <img className="w-full h-full absolute" src={info.image} alt="country state borders" />
                </div>
            </div>
        )
    }
    return null;
}

export default MapPiece

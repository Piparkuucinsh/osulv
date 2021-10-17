import React, {useState, useEffect} from 'react'
import { rankingData } from '../../data/ranking';

const MapPiece: React.FC<any> = ({info}) => {
    const [users, setUsers] = useState<any>([]);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if(info.name){
            rankingData.ranking.forEach((ranking) => {
                if(!users.includes(ranking) && info.players.includes(ranking.user.username)){
                    setUsers([...users, ranking]);
                }
            });
        }
    }, [info.name, users]);

    useEffect(() => {
        // console.log(users)
        // if(!user && users){
        //     if(users.length === 1){
        //         setUser(users[0]);
        //         console.log(user)
        //     }else{
        //         let correctOrder = users.sort((a: any, b: any) => {return b.pp - a.pp});
        //         let winningUser = correctOrder[0];
        //         setUser(winningUser);
        //         console.log(user)
        //     }
        // }
        if(users.length > 0){
            console.log(users)
        }
    }, [users, user]);
    
    return (
        <div className="absolute">
            <img className="" src={info.image} alt="country state borders" />
        </div>
    )
}

export default MapPiece

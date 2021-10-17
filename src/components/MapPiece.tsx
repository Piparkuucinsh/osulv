import React, {useState, useEffect} from 'react'
import { rankingData } from '../../data/ranking';

type Props = {
    info: {
        name: string;
        players: string[];
        image: string;
    }
}

interface Country{
    code: string;
    name: string
}

interface cover{
    custom_url: string;
    url: string;
    id: string;
}

interface User{
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit: string;
    pm_friends_only: boolean;
    profile_colour: null | any;
    username: string;
    country: Country;
    cover: cover;
}

const MapPiece: React.FC<Props> = ({info}) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        if(info.name){
            rankingData.ranking.forEach((ranking) => {
                if(info.players.includes(ranking.user.username)){
                    users.push(ranking.user);
                    console.log(users)
                }
            });
        }
    }, [info.name]);
    
    return (
        <div className="absolute">
            <img className="" src={info.image} alt="state" />
        </div>
    )
}

export default MapPiece

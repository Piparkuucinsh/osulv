import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { data } from '../../../data/ranking';

function index() {
    const [userInfo, setUserInfo] = useState(null);

    const router = useRouter();
    const {uid} = router.query;

    useEffect(() => {
        if(!userInfo && uid){
            for (let i = 0; i < data.ranking.length; i++){
                let ranking = data.ranking[i];

                if(ranking.user.id === parseInt(uid)){
                    setUserInfo(ranking);
                    break;
                }
            }
        }
    }, [userInfo, uid, data.ranking]);


    if(userInfo){
        return (
            <div>
                <img src={userInfo.user.avatar_url} alt="user" />
                <h3>{userInfo.user.username}</h3>
            </div>
        )
    }
    return null;
}

export default index

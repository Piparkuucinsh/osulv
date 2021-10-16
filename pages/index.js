import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { data } from '../data/ranking'

export default function Home() {
  const router = useRouter();
 
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/latvijagood.svg"/>

      <div className="w-full justify-center">
        {
          data.ranking.map((ranking, i) => {
            return (
              <div key={i} className="flex cursor-pointer mb-5 border-[1px] border-red-200" onClick={() => router.push(`/user/${ranking.user.id}`)}>
                <img src={ranking.user.avatar_url} alt={`${ranking.user.username}'s avatar`} className="w-10 h-10 rounded-full" />
                <h3>{ranking.user.username}</h3>
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

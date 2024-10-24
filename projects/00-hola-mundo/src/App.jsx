import './App.css'
import {TwiterFollowCard} from './TwiterFollowCard.jsx'

const users = [
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'Jair',
        name: 'Jair',
        isFollowing: false
    },
    {
        userName: 'LuisA',
        name: 'Luis A.',
        isFollowing: false
    }
]
export function App(){

    const format = (userName) => `@${userName}`
    return(
        <div className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return(
                        <TwiterFollowCard 
                        key={userName}
                        initialIsFollowing={isFollowing} 
                        userName={userName}
                        >
                            {name}
                        </TwiterFollowCard>
                    )
                })
            }
        </div>
    )
} 
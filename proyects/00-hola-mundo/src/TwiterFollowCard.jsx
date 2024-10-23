import { useState } from "react"
export function TwiterFollowCard({userName, children, initialIsFollowing}){
    const [isFollowing, setFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-Following' 
    : 'tw-followCard-button'
    
    const handleClick = () =>{
        setFollowing(!isFollowing)
    }
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' 
                src={`https://unavatar.io/${userName}`}
                alt="El avater de midudev" 
            />
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-infoName'>{children}</strong>
                <span className='tw-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}
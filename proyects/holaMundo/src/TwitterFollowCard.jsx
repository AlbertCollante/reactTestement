export function TwitterFollowCard (username, name, isFollowing){
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    src={`https://unavatar.io/${username}`} 
                    alt="El avatar de midudev" 
                    className="tw-followCard-avatar"
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName" >@{username}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}
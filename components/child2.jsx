import react from 'react'

function child2({user}) {
    return (
        <div id ="container">
            <h2>{user.name}'s profile web</h2>
            <p>Id:{user.Id}</p>
            <p>Hobbies:{user.hobbies.join(",")}</p>
            <p>{user.isMember ? "member" : "Not a member"}</p>

        </div>
    )
    
}

export default child2
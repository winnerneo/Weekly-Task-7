import React from 'react'

export default function Usercard(props) {
    return (
        <div>
            <img src={props.myUser[0].avatar} alt=""></img>
            <h2>{props.myUser[0].name}</h2>
            <label for="location">Location:</label>
            <h3>{props.myUser[0].location}</h3>
            <label for="foodType">Food:</label>
            <h3>{props.myUser[0].foodType}</h3>
            <label for="age">Age:</label>
            <h3>{props.myUser[0].age}</h3>
            <label for="likes">Likes:</label>
            <h3>{props.myUser[0].likes}</h3>
            <label for="twitterUsername">Twitter:</label>
            <h3> <a href="https://twitter.com/elonmusk">{props.myUser[0].twitterUsername}</a></h3> 
        </div>
    )
}

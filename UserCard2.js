import React from 'react'

export default function UserCard2(props) {
    return (
        <div>
            <img src={props.myUser[1].avatar} alt=""></img>
            <h2>Name: {props.myUser[1].name}</h2>
            <label for="location">Location:</label>
            <h3>{props.myUser[1].location}</h3>
            <label for="foodType">Food:</label>
            <h3>{props.myUser[1].foodType}</h3>
            <label for="age">Age:</label>
            <h3>{props.myUser[1].age}</h3>
            <label for="likes">Likes:</label>
            <h3>{props.myUser[1].likes}</h3>
            <label for="twitterUsername">Twitter:</label>
            <h3> <a href="https://twitter.com/chrismorgan45">{props.myUser[1].twitterUsername}</a></h3> 
        </div>
    )
}

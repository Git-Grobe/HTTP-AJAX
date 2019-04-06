import React from 'react';

const Friends = props => {
    return (
        <div>
            {console.log(props.friends)}
            {props.friends.map(item => (
                <div key={item.id}>
                    <p>My friends name is {item.name}</p>
                    <p>They are {item.age} years old</p>
                    <p>Contact them at {item.email}</p>
                    <br></br>
                </div>
                ))}
        </div>
    )
}

export default Friends;
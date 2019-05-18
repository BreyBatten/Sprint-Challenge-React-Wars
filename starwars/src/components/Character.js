import React from 'react';

function Character(props) {
    return (
        <div className="character-info">
            <h2>{props.character.name}</h2>
            <p>
                <strong>Hair Color:</strong> {props.character.hair_color}
            </p>
            <p>
                <strong>Gender:</strong> {props.character.gender}
            </p>
        </div>
    )
}

export default Character;
import React from 'react';
import Character from './Character';

const characters = [
    {
        name: "Luke Skywalker",
        gender: "male",
        hair_color: "blond"
    },
    {
        name: "C-3PO",
        gender: "n/a",
        hair_color: "n/a"
    },
    {
        name: "R2-D2",
        gender: "n/a",
        hair_color: "n/a" 
    },
    {
        name: "Darth Vader",
        gender: "male",
        hair_color: "none"
    },
    {
        name: "Leia Organa",
        gender: "female",
        hair_color: "brown" 
    },
    {
        name: "Owen Lars",
        gender: "male",
        hair_color: "brown, grey"
    },
    {
        name: "Beru Whitesun lars",
        gender: "female",
        hair_color: "brown"
    },
    {
        name: "R5-D4",
        gender: "n/a",
        hair_color: "n/a"
    },
    {
        name: "Biggs Darklighter",
        gender: "male",
        hair_color: "black"
    },
    {
        name: "Obi-Wan Kenobi",
        gender: "male",
        hair_color: "auburn, white"
    }
];

class StarwarsCharacters extends React.Component {
    constructor() {
        super();
        this.state = {
           StarwarsCharacters: characters 
        };
    }

    render() {
        return (
            <div className="character-list">
                {this.state.StarwarsCharacters.map(character => (
                    <Character character={character} />
                ))}
            </div>
        )
    }
}

export default StarwarsCharacters;
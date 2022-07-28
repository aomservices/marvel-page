import React, { useEffect, useState } from 'react';

import { CharacterCard } from '../CharacterCard/CharacterCard';

import { getCharacter } from '../../services/getCharacter';

export const CharactersList = ({ characterName = '' }) => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getCharacter({ characterName: characterName }).then(character => setData(character[0]));
    }, [characterName]);

    return (
        <CharacterCard character={data} />
    );
}

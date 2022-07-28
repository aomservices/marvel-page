import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getCharacterData } from '../../../services/getCharacterData';

export const CharacterDetail = () => {
    let location = useLocation();
    const [ characterData, setCharacterData ] = useState([]);
    const [ urlKey, setUrlKey ] = useState('');

    useEffect(() => {
        const getKeyUrl = String(location?.pathname.replace('/character/','').replace('-',' '));
        setUrlKey(getKeyUrl);
    }, [location]);

    useEffect(() => {
        getCharacterData({ characterName: urlKey }).then(character => setCharacterData(character[0]));
    }, [location, urlKey]);

    const {
        characterName = '',
        description = '',
        image = '',
        itemsComics = [],
        itemsEvents = [],
        itemsSeries = [],
        itemsStories = [],
    } = characterData;

    return (
        <div>
            <img src={image} alt={characterName} />
            <h2>{characterName}</h2>
            <h4>{description}</h4>
            <ul>
                <h4>Comics</h4>
                {itemsComics.map(item => <li key={item?.resourceURI}>{item?.name}</li>)}
            </ul>
            <ul>
                <h4>Events</h4>
                {itemsEvents.map(event => <li key={event?.resourceURI}>{event?.name}</li>)}
            </ul>
            <ul>
                <h4>Series</h4>
                {itemsSeries.map(serie => <li key={serie?.resourceURI}>{serie?.name}</li>)}
            </ul>
            <ul>
                <h4>Stories</h4>
                {itemsStories.map(storie => <li key={storie?.resourceURI}>{storie?.name}</li>)}
            </ul>
        </div>
    )
};

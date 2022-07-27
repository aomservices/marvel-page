import { API_BASE, PUBLIC_KEY } from '../utils/constants/constants';

export const getCharacterData = ({ characterName = 'hulk' }) => {

    const API_URL= `${API_BASE}/characters?name=${characterName}&apikey=${PUBLIC_KEY}`;

    return (
        fetch(API_URL)
            .then(response => response.json())
            .then(response => {
                const { data } = response;
                const characterData = data?.results.map(character => {
                    const { comics, description, events, id, name: characterName, thumbnail, series, stories } = character;
                    const { items: itemsComics } = comics;
                    const { items: itemsEvents } = events;
                    const { items: itemsSeries } = series;
                    const { items: itemsStories } = stories;
                    const { extension, path } = thumbnail;
                    const image = `${path}.${extension}`
                    return { 
                        characterName,
                        description,
                        id,
                        image,
                        itemsComics,
                        itemsEvents,
                        itemsSeries,
                        itemsStories,
                    };
                });
                return characterData;
            })
            .catch(err => console.error(err))
    );
};

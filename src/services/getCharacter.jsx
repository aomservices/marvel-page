import { API_BASE, PUBLIC_KEY } from '../utils/constants/constants'

export const getCharacter = ({ characterName = 'captain america' }) => {

    const API_URL= `${API_BASE}/characters?name=${characterName}&apikey=${PUBLIC_KEY}`;

    return (
        fetch(API_URL)
            .then(response => response.json())
            .then(response => {
                const { results = [] } = response.data;
                const characters = results.map(hero => {
                    const { id, name, thumbnail } = hero;
                    const { extension, path } = thumbnail;
                    const image = `${path}.${extension}`
                    return { id, image, name };
                });
                return characters;
            })
            .catch(err => console.error(err))
    );
};

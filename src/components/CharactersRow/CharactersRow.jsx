import React from 'react';

import { CharactersList } from '../CharactersList/CharactersList';
import {
    StyledGrid,
    StyledRow,
    StyledTitleSection,
} from './CharactersRow.styled'


export const CharactersRow = ({ dataList, title }) => {
    return (
        <StyledRow>
            <StyledTitleSection>{title}</StyledTitleSection>
            <StyledGrid>
                {dataList.map(character => (
                    <CharactersList 
                        key={character.id}
                        characterName={character.name}
                    />
                ))}
            </StyledGrid>
        </StyledRow>
    );
}

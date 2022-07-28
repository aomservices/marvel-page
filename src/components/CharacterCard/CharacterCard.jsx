import React from 'react';
import { Link } from "react-router-dom";

import { StyledCard, StyledName } from './CharacterCard.styled';

export const CharacterCard = ({ character }) => {
    const { id, image, name = '' } = character;

    return (
        <StyledCard>
            <Link to={`/character/${name.toLowerCase().replace(' ','-')}`}>
                <img src={image} alt={name} />
                <StyledName>
                    <h2>{name}</h2>
                    <h4>{id}</h4>
                </StyledName>
            </Link>
        </StyledCard>
    )
};

import React from 'react';
import { CharactersRow } from '../../components/CharactersRow/CharactersRow';
import { StyledMainContent } from './Home.styled';

export const Home = () => {
  const popularCharacters = [
    { id: '01', name: 'iron man' },
    { id: '02', name: 'captain america' },
    { id: '03', name: 'thor' },
    { id: '04', name: 'hulk' },
    { id: '05', name: 'black widow' },
    { id: '06', name: 'hawkeye' }
  ];

  const secoundaryCharacters = [
    { id: '21', name: '' },
    { id: '22', name: '' },
    { id: '23', name: '' },
    { id: '24', name: '' },
    { id: '25', name: '' },
  ];

  const lastestMovies = [
    { id: 'mov-01', name: '' },
    { id: 'mov-02', name: '' },
    { id: 'mov-03', name: '' },
    { id: 'mov-04', name: '' },
  ];

  return (
    <StyledMainContent>
      <CharactersRow dataList={popularCharacters} title="Most Popular Avengers" />
      <CharactersRow dataList={secoundaryCharacters} title="Others Avengers" />
      <CharactersRow dataList={lastestMovies} title="Latest Movies" />
    </StyledMainContent>
  );
}

import React from 'react';
import { Link } from "react-router-dom";

import { 
  StyledDescription,
  StyledHeader,
  StyledImg,
  StyledTitle
 } from './HeaderSection.styled';
import marvelLogo from '../../static/marvelLogo.svg';

export const HeaderSection = () => (
  <StyledHeader>
    <Link to="/">
      <StyledImg src={marvelLogo} alt="Marvel Logo" />
    </Link>
    <StyledTitle>Marvel App by Aveiro</StyledTitle>
    <StyledDescription>This app is for test my skills in React JS</StyledDescription>
  </StyledHeader>
);

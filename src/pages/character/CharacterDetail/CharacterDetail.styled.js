import styled from 'styled-components';

export const StyledCard = styled.div`
    background-color: #F5EDDC;
    border: 1px solid #CFD2CF;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 220px;
    
    & a {
        color: red;
        text-decoration: none;
    }
    
    & h2, h4 {
        text-decoration: none;
        margin: 0 0 4px 0;
    }
    
    & img {
        width: 100%;
    }
`;

export const StyledGrid = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const StyledName = styled.div`
    padding: 20px 16px;
`;

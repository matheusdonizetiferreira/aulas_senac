import React from 'react';
import styled from 'styled-components';


export default function ListGames(games) {

  const ItemConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
   width: 331px; 
   height: 605px;
    gap: 10px;
    border-radius: 5px;
    position: relative;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
    `;



  const Thumbnaill = styled.img`
   margin-top: 20px;
   width: 331px;
   height: 100%;
    background-size: cover;
    border-radius: 5px;
    box-shadow: 0px 0px 10px pink;
    


    border: 4px solid red;
  animation: borderAnimation 2s infinite alternate;
    @keyframes borderAnimation {
  0% {
    border-color: #740808;
  }
  25%{
    border-color: #6e0c6e;
  }
  50% {
    border-color: #019696;
  }
  100% {
    border-color: green;
  }
}

`;

  const Title = styled.div`
    color: #ffffff;
  font-family: 'Handjet', cursive;
  font-family: 'Poppins', sans-serif;
    `;

  const Price = styled.div`
    color: white;
    text-align: center;
    font-family: 'Handjet', cursive;
    font-family: 'Poppins', sans-serif;

 `;

  const Button = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  color: white;
  border-color: #a5a4a4;
  transition: border-color 0.25s;
  
  &:hover {
      border-color: #626af5;
  }
`;

  const ItemLink = styled.a`
    text-decoration: none;

    `;

  return (
    <>
      <ItemLink href={games.url} target="_blank">
        <ItemConteiner>
          <Thumbnaill src={games.img} />
          <Title>{games.title}</Title>
          <Price>{games.price}</Price>
          <Button class="codepen-button">Comprar</Button>

        </ItemConteiner>
      </ItemLink>
    </>
  )
}

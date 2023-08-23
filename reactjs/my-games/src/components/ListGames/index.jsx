import React from 'react';
import styled from 'styled-components';

  const ItemConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   width: 331px; 
    height: 605px;
    gap: 10px;
    border-radius: 5px;
    /* position: relative; */
    color: #29303b;
    margin-bottom: 10px;
    padding: 10px;
    `;



  const Thumbnaill = styled.img`
   width: 100%;
   height: 80%;
    border-radius: 5px;
    box-shadow: 0px 0px 20px pink; 

`;

  const Title = styled.div`
    color: #ffffff;
    `;

  const Price = styled.div`
    color: white;
    text-align: center;

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



export default function ListGames({game}) {
 

  return (
    <>
      <ItemLink href={game.url} target="_blank">
        <ItemConteiner>
          <Thumbnaill src={game.image} />

          <Title>{game.title}</Title>
          <Price>{game.price}</Price>
          <Button className="codepen-button">Comprar</Button>

        </ItemConteiner>
      </ItemLink>
    </>
  )
}

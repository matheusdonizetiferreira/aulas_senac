import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../services/api';

const ItemConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: 10px;
    border-radius: 5px;
    color: #29303b;
    margin-bottom: 10px;
    padding: 10px;
    justify-content: space-between;
    width: 80%;
    border: 1px solid gray;
    `;



const Thumbnaill = styled.img`
   width: 180px;
   height: 200px;
    border-radius: 5px;

`;

const Title = styled.div`
    color: #ffffff;
    text-shadow: 5px 5px 15px black;
    width: 43%;


    `;

const Price = styled.div`
    color: white;
    text-align: center;
    background-color: purple;
    padding: 5px;
    border-radius: 5px;


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



export default function ListGamesRow({ game }) {

    const navigate=useNavigate()

    const deleteGame=(id) =>{
      const url=`/data/${id}`
      api.delete(url)
    }


  return (
    <>
        <ItemConteiner>
          <Thumbnaill src={game.image} />


          <Title>{game.title}</Title>
          <Price>{game.price}</Price>
            <div>
                <Link className='buttonEditar' to={`/editar/${game.id}`}>Editar</Link>
                <button 
                    className='buttonExcluir' 
                    onClick={ () => deleteGame(game.id)}
                >
                  Excluir
                </button>
            </div>



        </ItemConteiner>
    </>
  )
}

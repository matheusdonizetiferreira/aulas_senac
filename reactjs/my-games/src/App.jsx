import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ListGames from './components/ListGames'
import { getGames } from './../api/BooksService'

import './App.css'

const Container = styled.div`
  max-width: 960px auto;
  margin: 30px auto;
  
  >h1{
      text-align: center;
      color: white;
      font-family: 'Oxanium', cursive;
font-family: 'Rubik', sans-serif;
   
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 25px;
  gap: 45px;
`;

function App() {
      const [games, setGames] = useState([]);

      const getData=async() =>{
            let resp = await fetch("http://localhost:3000/data")
            let Data = await resp.json()
            
            setGames(Data)
      } 


      useEffect(() => {
            getData()
      }, [])


      return (
            <Container>
            <div className='overlay'></div>

                  <h1>Compre Aqui os Jogos do Momento</h1>
                  <ListContainer>
                        {
                              games.map(game => {
                                    return (<ListGames
                                          key={game.url}
                                          img={game.image}
                                          title={game.title}
                                          url={game.url}
                                          price={game.price}
                                    />)
                              })
                        }

                  </ListContainer>

            </Container>
      )
}

export default App


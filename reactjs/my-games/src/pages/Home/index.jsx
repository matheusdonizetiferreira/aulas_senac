import { useState, useEffect } from "react";
import styled from 'styled-components'
import './home.css'
import ListGames from "../../components/ListGames";

function Home() {
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
            <div className="background">
                  <h1>Compre Aqui os Melhores Jogos do Momento</h1>
                  <div className= "containerGames">
                        {games.map(game =>{
                              console.log(game.title)
                              return (
                                    <ListGames key={game.id} game={game}/>
                              )
                        })}
                  </div>
            </div>
      );
}

export default Home;

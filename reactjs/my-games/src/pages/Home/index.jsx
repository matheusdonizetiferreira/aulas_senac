import { useState, useEffect } from "react";
import './home.css'
import ListGames from "../../components/ListGames";
import { useNavigate } from "react-router-dom";

function Home() {
      const navigate = useNavigate()
      const [games, setGames] = useState([]);

      const getData = async () => {
            let resp = await fetch("http://localhost:3000/data")
            let Data = await resp.json()

            setGames(Data)

      }


      useEffect(() => {
            getData()
      }, [])
      return (
            <div className="background">
                  <div className="containerBotao">
                        <h1>Compre Aqui os Melhores Jogos do Momento</h1>
                        <button class="btn" type="button" onClick={() => navigate('/cadastrar')}>
                              <strong>Cadastrar Jogo</strong>
                              <div id="container-stars">
                                    <div id="stars"></div>
                              </div>

                              <div id="glow">
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                              </div>
                        </button>
                  </div>
                  <div className="containerGames">
                        {games.map(game => {
                              console.log(game.title)
                              return (
                                    <ListGames key={game.id}
                                          game={game} />
                              )
                        })}
                  </div>
            </div>
      );
}

export default Home;

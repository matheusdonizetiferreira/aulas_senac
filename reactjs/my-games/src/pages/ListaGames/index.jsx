import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListGames from '../../components/ListGames'; //se der erro eu sei q é nessa linha
// import api from '../../services/api';
//import styles from 'styles.module.css';


const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
  padding: 10px;


>h1{
  text-align: center;
  color: white;
  font-family: 'Oxanium', cursive;
  font-family: 'Rubik', sans-serif;
  position: absolute;
  z-index: 1;
  width: 100%;

}

>div{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #00000061;
  height: 100%;


}
`;

const ListContainer2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 25px;
gap: 45px;
align-items: center;

`;

function App() {
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
        <Container>
              <h1>Compre Aqui os Melhores Jogos do Momento</h1>
              <div></div>
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

export default App;



// function ListaGames (){
//   const[books, setGames] = useState([]);
//   const[search, setSearch] = useState('');

//   useEffect( () => {
//       const url = '/games';
      
//       const params = {};
//       if (search) {
//         params.title_like = search

//         api.get('/games?_embed=games', {params})
//           .then( (response) => {
//             // console.log(response)
//             setGames(response.data)
//           })

//       } else {
        
//         api.get(url) // all
//         .then( (response) => {
//           // console.log(response)
//           setGames(response.data)
//         })

//       }
//   },[search]) 


//     return(
//           <Container>
//         <h1>Minhas Lista de Livros</h1>
//         <input 
//           className={styles.listaSearchInput}
//           type="search" 
//           placeholder='Buscar Livros - Digite aqui o Titulo do Livro'
//           value={search}
//           onChange={(ev) => setSearch(ev.target.value)}
//         />
//         <ListContainer>
//           {
//             books.map(book => {
//               return ( <ListBooks 
//                 key={book.id} 
//                 books={book}
                
//                   /> )
//             })

//           }
          
//         </ListContainer>
//     </Container>
//     )
//  }

// export default ListaBooks;
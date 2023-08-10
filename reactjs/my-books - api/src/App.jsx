// hooks react
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListBooks from './components/ListBooks';
import api from './services/api';

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
`;

function App() {
  const[books, setBooks] = useState([]);
  const[search, setSearch] = useState('');  // useState é um estado e o um estado e uma variável que armazena 
  // alugma coisa e controla o estado

  // var books
  // setBooks(valores pra variavel books)

  useEffect( () => {
    const url = '/books';

    const params = {};
    
    if (search) {
      params.title_like = search

        api.get('/books?_embed=books', {params})
        .then( (response) => {
          // console.log(response.data)
          setBooks(response.data)
        })

    } else {
        api.get(url) //all
        .then( (response) => {
          // console.log(response.data)
          setBooks(response.data)
        })
    }
    
  },[search])  



  return (
    <Container>
        <h1>Minhas Lista de Livros</h1>
        <input type="search" placeholder='Buscar Livros - Digite aqui' value={search} onChange={(ev) => setSearch(ev.target.value)}/>
        
        <ListContainer>
          {
            books.map(book => {
              return ( <ListBooks 
                key={book.url} 
                books={book}
                
                  /> )
            })
          }
          
        </ListContainer>
    </Container>

  )
}

export default App


{/* <ListBooks 
img="https://m.media-amazon.com/images/I/4110e7iseFL.jpg"
url="https://www.amazon.com.br/Programa%C3%A7%C3%A3o-Web-com-Node-js-Front-end-ebook/dp/B074RCRKSL/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=13ROZHACUHLOI&keywords=Nodejs&qid=1690244958&s=digital-text&sprefix=nodejs%2Cdigital-text%2C263&sr=1-3"
title="Programação Web com Nodejs"
price="R$ 14,99"
/>
<ListBooks
img="https://m.media-amazon.com/images/I/41CUCsnLPML.jpg"
url="https://www.luiztools.com.br/livro-node-ii-amazon"
title="Node.js e Microservices"
price="R$ 14,99"
/>
<ListBooks
img="https://m.media-amazon.com/images/I/31NR3RRS3VL.jpg"
url="https://www.luiztools.com.br/livro-mongodb-amazon"
title="MongoDB para Iniciantes"
price="R$ 11,99"
/> */}

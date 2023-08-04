// hooks react
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListBooks from './components/ListBooks';
import axios from 'axios';

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

  useEffect( () => {
      axios.get('http://localhost:3000/books')
        .then( (response) => {
          // console.log(response.data)
          setBooks(response.data)
        })
  },[])  


  return (
    <Container>
        <h1>Minhas Lista de Livros</h1>
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



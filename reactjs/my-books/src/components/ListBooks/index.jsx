import React from 'react'
import styled from 'styled-components';

const ItemConteiner = styled.div`
  border-radius: 4px;
  position: relative;
  background-color: #ffff;
  height: 120px;
  width: 262px;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
`;

const Thumbnaill = styled.img`
width: auto;
height: 100%;
border: 0;
vertical-align: middle;
float: left;
margin-right: 10px;
`

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`

const Price = styled.div`
margin-bottom: 5px;
`;

const Button = styled.div`

`;

const ItemLink = styled.a`
  text-decoration: none;
`


export default function ListBooks(books) {
  return (
    <>
    <ItemLink href={books.url} target="_blank">
      <ItemConteiner>
        <Thumbnaill src={books.img} />
        <Title>{books.title}</Title>
        <Price>{books.price}</Price>
        <Button>Comprar</Button>
      </ItemConteiner>
      </ItemLink>
    </>
  )
}

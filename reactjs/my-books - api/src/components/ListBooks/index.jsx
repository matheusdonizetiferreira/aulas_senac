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
  display: inline-block;
  position: absolute;
  bottom: -10px;
  left: 125px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 8px 15px;
  color: #fff;
  background-color: #0361db;
  border-color: #0e7ab8;
  border-radius: 4px;
`;

const ItemLink = styled.a`
  text-decoration: none;
`


export default function ListBooks({books}) {
  return (
    <>
    <ItemLink href={books.url} target="_blank">
      <ItemConteiner>
        <Thumbnaill src={books.image} />
        <Title>{books.title}</Title>
        <Price>{books.price}</Price>
        <Button>Comprar</Button>
      </ItemConteiner>
      </ItemLink>
    </>
  )
}

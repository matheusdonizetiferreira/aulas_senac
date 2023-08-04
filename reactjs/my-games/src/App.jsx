import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import  ListGames  from './components/ListGames'
import { getGames } from './../api/BooksService'

import './App.css'

const Container = styled.div`
  max-width: 960px auto;
  margin: 30px auto;
  
  >h1{
      text-align: center;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-family: 'Raleway', sans-serif;
   
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
       const[games, setGames] = useState([]);

       useEffect( () => {
            setGames(getGames)
           },[]) 


      return (
            <Container>
                  <h1>Compre Aqui os Jogos do Momento</h1>
                  <ListContainer>
                  <ListGames 
                        img={"./image/gta.png"}
                        url="https://www.mercadolivre.com.br/grand-theft-auto-v-premium-edition-rockstar-games-ps4-fisico/p/MLB22743132?from=gshop&matt_tool=86203044&matt_word=&matt_source=google&matt_campaign_id=14303413802&matt_ad_group_id=125984296477&matt_match_type=&matt_network=g&matt_device=c&matt_creative=539354956935&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB22743132-product&matt_product_partition_id=1816340443089&matt_target_id=aud-2009166904988:pla-1816340443089&gclid=EAIaIQobChMIz7_RiZ-6gAMVROZcCh1WNAPREAQYASABEgJRUvD_BwE"
                        title="Grand Theft Auto V Premium Edition Rockstar Games PS4 Físico"
                        price="R$ 109.46"
                        />


                        <ListGames
                        img={"./image/ps4.png"}
                        url="https://www.mercadolivre.com.br/the-last-of-us-remastered-standard-edition-sony-ps4-fisico/p/MLB6084032?from=gshop&matt_tool=86203044&matt_word=&matt_source=google&matt_campaign_id=14303413802&matt_ad_group_id=125984296477&matt_match_type=&matt_network=g&matt_device=c&matt_creative=539354956935&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB6084032-product&matt_product_partition_id=1816340443089&matt_target_id=aud-2009166904988:pla-1816340443089&gclid=EAIaIQobChMI3Mqdy5-6gAMVQeVcCh1FwgbBEAQYASABEgIx8_D_BwE"
                        title="The Last of Us Remastered Standard Edition Sony PS4 Físico"
                        price="R$ 71.79"
                        />

                        <ListGames
                        img={"./image/fifa.png"}
                        url="https://www.mercadolivre.com.br/fifa-23-standard-edition-electronic-arts-ps4-fisico/p/MLB19540150?pdp_filters=category:MLB186456#searchVariation=MLB19540150&position=1&search_layout=grid&type=product&tracking_id=7529c39d-6fdc-4b76-b15f-4083f988bf00"
                        title="FIFA 23 Standard Edition Electronic Arts PS4 Físico"
                        price="R$ 201.00"
                        />                     
                  </ListContainer>
                  
            </Container>
      )
}

export default App





// {
//       games.map(game => {
//             return (<Listgames
//             key={game.url}
//             img={game.image}
//             title={game.title}
//             url={game.url}
//             price={game.price}
//             />)
//       })
// }
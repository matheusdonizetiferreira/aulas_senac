import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListaGames from '../pages/ListaGames';
// import Cadastrar from '../pages/Cadastrar';
import Administrar from '../pages/Administrar';
import NotFound from '../pages/NotFound';


const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <ListaGames />} />
                {/* <Route path='/cadastrar' element={ <Cadastrar/>} /> */}
                { <Route path='/administrar' element={ <Administrar/>} /> }
                <Route path='*' element={ <NotFound />} />
            </Routes>
        </Router>

    );
}

export default Root;
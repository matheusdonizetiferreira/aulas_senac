import NotFound from '../pages/NotFound'
import Cadastrar from '../pages/Cadastrar';
import Administrar from '../pages/Administrar'
import ListaGames from '../pages/Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Root() {
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<ListaGames/>}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
                <Route path="/administrar" element={<Administrar/>}/>
                <Route path="*" element={<NotFound/>}/>
                {/* <Route path="/" element={<App/>}/> */}
            </Routes>
        </Router>
     );
}

export default Root;
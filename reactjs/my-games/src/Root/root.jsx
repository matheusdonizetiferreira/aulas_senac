import NotFound from '../pages/NotFound'
import Cadastrar from '../pages/cadastrar';
import Administrar from '../pages/Administrar'
import App from '../App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Root() {
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
                <Route path="/administrar" element={<Administrar/>}/>
                <Route path="*" element={<NotFound/>}/>
                {/* <Route path="/" element={<App/>}/> */}
            </Routes>
        </Router>
     );
}

export default Root;
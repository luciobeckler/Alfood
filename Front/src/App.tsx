import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VitrineRestaurantes from './pages/VitrineRestaurantes';
import AdministracaoRestaurante from './pages/Administracao/Restaurante/Restaurante';
import CadastraRestaurantes from './pages/Administracao/Restaurante/CadastraRestaurantes';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/restaurantes' element={<VitrineRestaurantes />} />
            <Route
                path='/admin/restaurantes'
                element={<AdministracaoRestaurante></AdministracaoRestaurante>}
            ></Route>
            <Route
                path='/admin/restaurantes/novo'
                element={<CadastraRestaurantes></CadastraRestaurantes>}
            ></Route>
        </Routes>
    );
}

export default App;

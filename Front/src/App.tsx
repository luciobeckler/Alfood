import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VitrineRestaurantes from './pages/VitrineRestaurantes';
import AdministracaoRestaurante from './pages/Administracao/Restaurante/Restaurante';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/restaurantes' element={<VitrineRestaurantes />} />
            <Route
                path='/admin/restaurantes'
                element={<AdministracaoRestaurante></AdministracaoRestaurante>}
            ></Route>
        </Routes>
    );
}

export default App;

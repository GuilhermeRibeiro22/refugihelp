import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './components/pages/Inicio';
import Menu from './components/Menu';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemCarousel from './components/ItemCarousel';
import Rodape from './components/Rodape';
import Contato from './components/pages/Contato';
import Doacoes from './components/pages/Doacoes';
import Projetos from './components/pages/Projetos';
import Voluntariado from './components/pages/Voluntariado';

function App() {
  return (
    <div>
      <Container fluid className='bg-dark text-white p-0 overflow-hidden'>
        <BrowserRouter>
          <Row>
            <Col>
              <Menu />
            </Col>
          </Row>
          <Row>
            <Col>
            
            </Col>
          </Row>

          <Row>
          {/* Aqui vai o conteúdo (rotas do site) */}
          <Col>
          {/* Rotas */}
          <Routes>
            <Route exact path="/" element={<Inicio/>}></Route>
            <Route exact path="/contato" element={<Contato/>}></Route>
            <Route exact path="/doacoes" element={<Doacoes/>}></Route>
            <Route exact path="/projetos" element={<Projetos/>}></Route>
            <Route exact path="/voluntariado" element={<Voluntariado/>}></Route>
            
            
          </Routes>
          </Col>
        </Row>
        </BrowserRouter>

        <Row>
          {/* Aqui vai o rodapé */}
          <Rodape/>
        </Row>
      </Container>
    </div>
  );
}

export default App;

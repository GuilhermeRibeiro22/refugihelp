import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'


function Menu() {
    const [paginaAtual, mudaPaginaAtual] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='bg-danger' expand='md'>
                <NavbarBrand className='text-white' href="/">RefugiHelp</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem >
                            <Link to="/" className={paginaAtual === 'home' ? 'nav-link active' : 'nav-link text-white'} onClick={() => mudaPaginaAtual('home')}>Início</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/projetos" className={paginaAtual === 'projetos' ? 'nav-link active' : 'nav-link text-white'} onClick={() => mudaPaginaAtual('projetos')}>Projetos</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/doacoes" className={paginaAtual === 'doacoes' ? 'nav-link active' : 'nav-link text-white'} onClick={() => mudaPaginaAtual('doacoes')}>Doações</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/voluntariado" className={paginaAtual === 'voluntariado' ? 'nav-link active' : 'nav-link text-white'} onClick={() => mudaPaginaAtual('voluntariado')}>Voluntariado</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contato" className={paginaAtual === 'contato' ? 'nav-link active' : 'nav-link text-white'} onClick={() => mudaPaginaAtual('contato')}>Contato</Link>
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
}

export default Menu;
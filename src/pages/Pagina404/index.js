import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Pocoyo from '../../assets/img/pocoyo.png';
import './error.css';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    text-align: center;
`;

function Pagina404() {
    return (
        <>
        <Menu />
            <Main>
                <img className="Pocoyo" src={Pocoyo} alt="erro Pocoyo" />
                <h3>
                    Vai pra onde? Essa página não existe... Mas não fique triste!<br/><br/>
                    Digite corretamente o endereço URL, ou...
                </h3>
                
                <Link to="/">
                    <h4>Volte para a página inicial</h4>
                </Link>
            </Main>
        <Footer />
        </>
    )
}

export default Pagina404;
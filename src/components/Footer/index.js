import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <FooterBase>
        <Link to="/">
            <img className="Logo" src={Logo} alt="PianoFlix logo" />
        </Link>
        <p>
            Orgulhosamente criado pela Victória, durante a
            {' '}
            <a href="https://www.alura.com.br/">
                Imersão React da Alura
            </a>
        </p>
        </FooterBase>
    );
}

export default Footer;

import React from 'react';
import './styles.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className='container'>
                <div className='description'>
                    <p>Data provided by Marvel. ©{currentYear} MARVEL</p>
                    <p>Desenvolvido por <span>Renata Chagas</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

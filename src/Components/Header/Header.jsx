import React from 'react';
import './Header.css';

const Header = React.memo((props) => {
    return (
        <header className="header" >
            <p id="headerParagraf">Vremea in {props.name}</p>
            <div className='info'>Pt info despre vreme in alta zona faceti pe harta un click in zona respectiva</div>
        </header>
    );
})

export default Header;
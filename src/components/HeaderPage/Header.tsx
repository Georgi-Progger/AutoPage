import React from 'react';
import Tele from "../imgs/Vector.png"
import "./Header.css"
const Header : React.FC = () => {
  return (
    
    <div className='headerMain'>
        <div className='header' id='header'>
            <div className='headerLogo'>
                <a href='/'>
                    <div className='Logo'></div>
                    <div className='Logo2'></div>
                </a>
            </div>
            <nav>
                <ul className='list'>
                    <li>
                        <a href='#MainPhoto'>Главная</a>
                    </li>
                    <li>
                        <a href='#Info'>Выкуп</a>
                    </li>
                    <li>
                        <a href='#Availability'>В наличии</a>
                    </li>
                    <li>
                        <a href='#Selection'>Автоподбор</a>
                    </li>
                    <li>
                        <a href='#footer'>Контакты</a>
                    </li>
                </ul>
            </nav>

            <div className='Telephone'>
                <img src={Tele}/>
                <p>8 (8672) 404 222</p>
            </div>
        </div>
    </div>
  );
}

export default Header;

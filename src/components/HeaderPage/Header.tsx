import React from 'react';
import Tele from "../imgs/Vector.png"
import "./Header.css"
const Header : React.FC = () => {
  return (
    
    <div className='header'>
        <div className='headerLogo'>
            <div className='Logo'></div>
            <div className='Logo2'></div>
        </div>
        <nav>
            <ul className='list'>
                <li>
                    <a href='#'>Главная</a>
                </li>
                <li>
                    <a href='#'>Выкуп</a>
                </li>
                <li>
                    <a href='#'>В наличии</a>
                </li>
                <li>
                    <a href='#'>Автоподбор</a>
                </li>
                <li>
                    <a href='#'>Контакты</a>
                </li>
            </ul>
        </nav>

        <div className='Telephone'>
            <img src={Tele}/>
            <p>8 (8672) 404 222</p>
        </div>
    </div>
  );
}

export default Header;

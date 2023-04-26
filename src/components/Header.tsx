import React from 'react';
import logo1 from "../imgs/Group 13 (1).png"
import logo2 from "../imgs/Group 14.png"
import "./Header.css"
const Header : React.FC = () => {
  return (
    
    <div className='header'>
        <div className='headerLogo'>
            <img className='Logo' src={logo1}/>
            <img className='Logo2' src={logo2}/>
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
            <p>8 (8672) 404 222</p>
        </div>
    </div>
  );
}

export default Header;

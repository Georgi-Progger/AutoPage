import React from 'react';
import Tele from "../imgs/Vector.png"
import "./Footer.css"
const Footer : React.FC = () => {
  return (
    
    <div className='footer'>
        <div className='footer-up'>
            <div className='footerLogo'>
                <a href='/'>
                    <div className='Logo'></div>
                    <div className='Logo2'></div>
                </a>
            </div>
            <nav>
                <ul className='list-up'>
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

            <div className='Telephone-down'>
                <img src={Tele}/>
                <p>8 (8672) 404 222</p>
            </div>
        </div>
        <div className='footer-down'>
            <div className='footerRef'>
                <a href='/'>
                    <div className='Ref'></div>
                </a>
                <a>
                    <div className='Ref2'></div>   
                </a>
            </div>
            <p className='First'>2023 © Алания - Авто. Все права защищены.</p>
            <p className='Second'>г.Владикавказ, Архонское шоссе, 2-ой км</p>
        </div>
    </div>
  );
}

export default Footer;

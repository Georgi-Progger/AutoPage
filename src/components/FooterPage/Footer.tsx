import React from 'react';
import Tele from "../imgs/Vector.png"
import "./Footer.css"
const Footer : React.FC = () => {
  return (
    
    <div className='footer'>
        <div className='footer-up'>
            <div className='footerLogo'>
                <a href='/'>
                    <div className='LogoFooter'></div>
                    <div className='LogoFooter2'></div>
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
                <a href='https://instagram.com/alania_auto?igshid=NTc4MTIwNjQ2YQ=='>
                    <div className='Ref'></div>
                </a>
                <a href='https://m.avito.ru/user/2e0c069a6a63cf7d6d36972ec64ffbc6/profile'>
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

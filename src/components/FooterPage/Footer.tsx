import React from 'react';
import Tele from "../imgs/Vector.png"
import "./Footer.css"



function callTelephone(number:string){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let url = '';
    if (isMobile && typeof window !== 'undefined') {
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        url = `tel://${number}`;
      } else if (/Android/i.test(navigator.userAgent)) {
        url = `tel:${number}`;
      }
    } 
    if (url) {
      window.open(url);
    }
}


const Footer : React.FC = () => {
    const address = 'г.Владикавказ, Архонское шоссе, 2-ой км';
    const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(address)}`;

    function handlePhoneClick() {
        const number = "88672404222";
        callTelephone(number);
      }
  return (
    
    <div className='footer' id='footer'>
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
                        <a href='#header'>Контакты</a>
                    </li>
                </ul>
            </nav>

            <div className='Telephone-down'>
                <img src={Tele}/>
                <p onClick={handlePhoneClick}>8 (8672) 404 222</p>
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
            <p className='Second'>
                <a href={mapUrl} target='_blank' rel='noopener noreferrer' style={{ color: 'gray' }}>
                    {address}
                </a>
            </p>
        </div>
    </div>
  );
}

export default Footer;

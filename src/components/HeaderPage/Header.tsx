import React from 'react';
import Tele from "../imgs/Vector.png"
import "./Header.css"
import List from "../ListManager/ListPage"

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




const Header : React.FC = () => {

    function handlePhoneClick() {
        const number = "88672404222";
        callTelephone(number);
      }
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
                <p onClick={handlePhoneClick}>8 (8672) 404 222</p>
            </div>
        </div>
    </div>
  );
}

export default Header;

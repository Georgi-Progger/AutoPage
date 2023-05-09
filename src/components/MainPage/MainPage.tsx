import React , { useState } from 'react';
import "./MainPage.css"
import List from "../ListManager/ListPage"

const MainPage : React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [isRadioChecked, setIsRadioChecked] = useState(false);


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
    setIsRadioChecked(false);
  };


  return (
    <div className='main'>
      <div className='CallWindow' onClick={togglePopup}>
        <div className='CallIcon'></div>
        <p>Позвонить</p>
      </div>
      {showPopup && (
        <div>
          <div className='PopupOverlay' onClick={closePopup}></div>
          <List/>
        </div>
      )}
      <div className='MainPhoto' id='MainPhoto'>
      <p className='TextMain'>Лёгкое начало пути   
            <span> вместе </span>  <br/>
             с Алания - Авто
          </p>
      </div>
      <div className='Info' id='Info'>
        <div className='InfoMain'>
          <div className='Stick'></div>
          <div className='InfoMainText'>
            <div className='InfoMainText-Inside'>
              <div className='InfoIcon'>
                <div className='InfoIcon-Inside'></div>
              </div>
              <p>Выкуп. Продажа.<br/> Трейд-ин</p>
            </div>
            <div className='InfoMainTextSpan'>
              <p>Выгодно выкупим любой автомобиль. <br/>
              Быстро продадим Ваш автомобиль. <br/>
              Легко обменяем старый на новый</p>
            </div>
          </div>
          </div>
          <div className='InfoPhoto'></div>
      </div>
      <div className={`Logo-animation${showPopup ? ' z-index-negative' : ''}`}>
        <div className='Logo-animation-img'></div>
        <div className='Logo-animation-img'></div>
      </div>
      <div className='Availability' id="Availability">
        <div className='AvailabilityContent'>
          <div className='AvailabilityPhoto'>
            <div className='AvailabilityPhoto-Inside'></div>
          </div>
          <div className='AvailabilityMain'>
            <div className='Stick2'></div>
            <div className='AvailabilityMainText'>
              <div className='AvailabilityContentIcon'>
                <div className='AvailabilityIcon'>
                  <div className='AvailabilityIcon-Inside'></div>
                </div>
                <p>Большой выбор <br/> автомоблей в наличии</p>
              </div>
              <div className='AvailabilityMainTextSpan'>
                <p >Большой выбор автомобилей российских и зарубежных марок.<br/> 
                Все автомобили проходят комплексную проверку на юридическую чистоту и техническое состояние</p>
              </div>
            </div>
          </div>
        </div>
        <div className='Availability-back'></div>
      </div>
      <div className='Selection' id='Selection'>
        <div className='SelectionMain'>
          <div className='Stick3'></div>
          <div className='SelectionMainText'>
            <div className='SelectionMainText-Inside'>
              <div className='SelectionIcon'>
                <div className='SelectionIcon-Inside'></div>
              </div>
              <p>Подбор и доставка <br/> под заказ</p>
              </div>
              <div className='SelectionMainTextSpan'>
                <p>Нет подходящего автомобиля в наличии?<br/> Мы подберём и доставим его из любой точки страны</p>
              </div>
            </div>
          </div>
          <div className='SelectionPhoto'></div>
      </div>
  </div>
);
}

export default MainPage;

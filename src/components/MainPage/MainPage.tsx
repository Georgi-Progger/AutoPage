import React , { useState } from 'react';
import "./MainPage.css"
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

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRadioChecked(event.target.checked);
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
          <div className='Popup'>
            <ul>
              <li>
                <label htmlFor='option1'>Олег</label>
                <input
                  type='radio'
                  id='option1'
                  name='options'
                  value='1'
                  onChange={handleRadioChange}
                />
              </li>
              <li>
                <label htmlFor='option2'>Аслан</label>
                <input
                  type='radio'
                  id='option2'
                  name='options'
                  value='2'
                  onChange={handleRadioChange}
                />
              </li>
            </ul>
            <div className={`CallPop ${!isRadioChecked ? 'disabled' : ''}`}>
              <div className='CallIcon'></div>
              Позвонить
            </div>
          </div>
        </div>
      )}
      <div className='MainPhoto'>
        <div className='TextMain'>
          <p>Лёгкое начало пути   
            <span> вместе </span> <br/> 
             с Алания - Авто
          </p>
        </div>
      </div>
      <div className='Info'>
        <div className='InfoMain'>
          <div className='Stick'></div>
          <div className='InfoMainText'>
            <div className='InfoMainText-Inside'>
              <div className='InfoIcon'>
                <div className='InfoIcon-Inside'></div>
              </div>
              <p>Выкуп. Продажа.<br/> Трейд-ин</p>
            </div>
            <p>Выгодно выкупим любой автомобиль. 
            Быстро продадим Ваш автомобиль. 
            Легко обменяем старый на новый</p>
          </div>
          </div>
          <div className='InfoPhoto'></div>
      </div>
      <div className={`Logo-animation${showPopup ? ' z-index-negative' : ''}`}>
        <div className='Logo-animation-img'></div>
      </div>
      <div className='Availability'>
        <div className='AvailabilityContent'>
          <div className='AvailabilityPhoto'>
            <div className='AvailabilityPhoto-Inside'>

            </div>
          </div>
          <div className='Stick2'></div>
          <div className='AvailabilityMainText'>
            <div className='AvailabilityContentIcon'>
              <div className='AvailabilityIcon'>
                <div className='AvailabilityIcon-Inside'></div>
              </div>
              <p>Большой выбор автомоблей в наличии</p>
            </div>
            <p >Большой выбор автомобилей российских и зарубежных марок.<br/> 
            Все автомобили проходят комплексную проверку на юридическую чистоту и техническое состояние</p>
          </div>
        </div>
        <div className='Availability-back'></div>
      </div>
      <div className='Selection'>
        <div className='SelectionMain'>
          <div className='Stick3'></div>
          <div className='SelectionMainText'>
            <div className='SelectionMainText-Inside'>
              <div className='SelectionIcon'>
                <div className='SelectionIcon-Inside'></div>
              </div>
              <p>Подбор и доставка <br/> под заказ</p>
            </div>
              <p>Нет подходящего автомобиля в наличии?<br/> Мы подберём и доставим его из любой точки страны</p>
            </div>
          </div>
          <div className='SlectionPhoto'></div>
      </div>
  </div>
);
}

export default MainPage;

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
          <p>Лёгкое начало
            пути <span>вместе </span> 
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
  </div>
);
}

export default MainPage;

import React , { useState } from 'react';
import "./MainPage.css"
const MainPage : React.FC = () => {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className='main'>
       <div className='CallWindow' onClick={togglePopup}>
        <div className='CallIcon'></div>
          Позвонить
        </div>
        {showPopup && 
          <div>
            <div className="PopupOverlay" onClick={closePopup}></div>
            <div className="Popup">
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>  
              <div className='CallPop'>
                Позвонить
              </div>
            </div>
          </div>
        }
      <div className='MainPhoto'>
        <div className='TextMain'>
          <p>Лёгкое начало<br/>
            пути <span>вместе</span> <br/>
            с Алания - Авто</p>
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

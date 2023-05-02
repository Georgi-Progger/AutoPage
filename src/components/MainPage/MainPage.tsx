import React from 'react';
import MainPhoto from "../imgs/photo.png"
import "./MainPage.css"
const MainPage : React.FC = () => {
  return (
    <div className='main'>
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
          <p>Выкуп. Продажа.<br/> Трейд-ин</p>
        </div>
            <div className='InfoPhoto'></div>
        </div>
    </div>
    
  );
}

export default MainPage;

import React from 'react';
import MainPhoto from "../imgs/photo.png"
import "./MainPage.css"
const MainPage : React.FC = () => {
  return (
    <div className='MainPhoto'>
        <img src={MainPhoto}/>
    </div>
  );
}

export default MainPage;

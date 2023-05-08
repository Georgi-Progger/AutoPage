import React, { useState }  from 'react';

const phoneNumbers: Record<string, string> =  {
  "1": "+123456789",
  "2": "+987654321",
  "3": "+555555555",
  "4": "+111111111",
  "5": "+999999999",
};

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
function callWhatsApp(number:string){
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let url = '';
  url = `https://web.whatsapp.com/send?phone=${encodeURIComponent(number)}`;
  if (url) {
    window.open(url);
  }
}





const ListPage : React.FC = () => {
    const isMobile = /Mobile|Android/.test(navigator.userAgent);
  const [selectedOption, setSelectedOption] = useState("");
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  function handleRadioChange(event : React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
    setIsRadioChecked(true);
  }

  function handleCallClick() {
    const number = phoneNumbers[selectedOption];
    setShowCallPopup(true);
  }

  function handlePhoneClick() {
    const number = phoneNumbers[selectedOption];
    callTelephone(number);
  }

  function handleWhatsappClick() {
    const number = phoneNumbers[selectedOption];
    callWhatsApp(number);
  }

    if (isMobile) {
      return (
        <div className='Popup'>
          <ul>
            <li>
              <label htmlFor='option1'>Евгений Сергеевич Грировский</label>
              <input
                type='radio'
                id='option1'
                name='options'
                value='1'
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <label htmlFor='option2'>Ахсарбек Валерьевич Джигкаев</label>
              <input
                type='radio'
                id='option2'
                name='options'
                value='2'
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <label htmlFor='option3'>Казбек Болевич Гозоев</label>
              <input
                type='radio'
                id='option3'
                name='options'
                value='3'
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <label htmlFor='option4'>Андрей Сергеевич Середенко</label>
              <input
                type='radio'
                id='option4'
                name='options'
                value='4'
                onChange={handleRadioChange}
              />
            </li>
            <li>
              <label htmlFor='option5'>Артур Джамболатович Баскаев</label>
              <input
                type='radio'
                id='option5'
                name='options'
                value='5'
                onChange={handleRadioChange}
              />
            </li>
          </ul>
          <div className={`CallPop ${!isRadioChecked ? 'disabled' : ''}`} onClick={handleCallClick}>
            <div className='CallIcon'></div>
            Позвонить
          </div>
          {showCallPopup && (
        <div>
          <div onClick={handlePhoneClick}><p>Телефон</p> </div>
           <div onClick={handleWhatsappClick}><p>Ватсапп</p></div>
        </div>
      )}
        </div>
      );
    } else {
      return <div className='Popup'>
          
      </div>
    }
}

export default ListPage;

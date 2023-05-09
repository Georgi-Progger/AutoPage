import React, { useState }  from 'react';

const phoneNumbers: Record<string, string> =  {
  "1": "+79183563878",
  "2": "+79187089797",
  "3": "+79888710090",
  "4": "+79888386490",
  "5": "+79094773399",
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
  url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}`;
  if (url) {
    window.open(url);
  }
}





const ListPage : React.FC = () => {
    const isMobile = /Mobile|Android/.test(navigator.userAgent);
  const [selectedOption, setSelectedOption] = useState("");
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [buttonIsCative, setButtonIsCative] = useState(false);

  function handleRadioChange(event : React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
    setIsRadioChecked(true);
  }

  function handleCallClick() {
    const number = phoneNumbers[selectedOption];
    setShowCallPopup(true);
    setButtonIsCative(true);
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
      if(buttonIsCative === false){
        return (
        
          <div className='Popup'>
            <p>Выберете менеджера:</p>
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
              <p style={{margin:"0"}}>Позвонить</p>
            </div>
            
          
          </div>
        );
      }else{
        return(
          <div className='CallApp'>
            <p  style={{ display: 'block' }}>Выберете способ связи:</p>
            {showCallPopup && (
            <div  style={{ display: 'flex',alignItems:"center", justifyContent: "center", color:"gray"}}>
              <div style={{marginRight:'54px', textAlign:"center"}} onClick={handlePhoneClick}>
                <div className='TelephoneNumber'></div>
                <p>Мобильная связь</p>
              </div>
              <div onClick={handleWhatsappClick}>
                <div className='WhatsApp'></div>
                <p>WhatsApp</p>
              </div>
            </div>)}
          </div>
        );
      }
      
    } else {
      return <div className='Popup'>
          
      </div>
    }
}

export default ListPage;

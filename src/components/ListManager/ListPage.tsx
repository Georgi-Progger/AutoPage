import React, { useState }  from 'react';



const ListPage : React.FC = () => {
    const isMobile = /Mobile|Android/.test(navigator.userAgent);
    const [isRadioChecked, setIsRadioChecked] = useState(false);



    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsRadioChecked(event.target.checked);
      };
    

    if (isMobile) {
      return (<div className='Popup'>
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
      )
    } else {
      return <div>Это компьютер</div>;
    }
}

export default ListPage;

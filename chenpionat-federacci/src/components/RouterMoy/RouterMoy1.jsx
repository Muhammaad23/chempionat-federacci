import React from 'react';
import './routermoy1.css';

function RouterMoy1(props) {
    return (
        <>
            <div className="ml-5 pt-5" style={{position:'absolute'}}>
                <h3>Личные данные</h3>
                <p>Здесь вы можете редактировать свои личные данные </p>
                <div style={{display:'flex',marginBottom:'40px'}}>
                <div className="">
                   <div className="mb-3">
                    <p>Имя</p>
                    <input className='Router-inputt' type="text" placeholder='Дильшод'/>
                    </div>
                   <div className="mb-3">
                    <p>Отчество</p>
                    <input className='Router-inputt' type="text" placeholder='Исмоилович'/>
                   </div>
                    <form className='mb-3'>
                   <div>
                     <p>Дата рождения</p>
                     <input className='Router-inputt' type="date" id="bday" name="bday"/>
                   </div>
                  </form>                    
                </div>
                <div className="ml-3">
                <div className="mb-3">
                    <p>Фамилия</p>
                    <input className='Router-inputt' type="text" placeholder='Тохиров'/>
                </div>
                <div className="mb-3">
                    <p>Номер телефона</p>
                    <input className='Router-inputt' type="tel:" placeholder='+998 90 938 43 23'/>
                </div>
                <div className="Дата рождения">
                    <p>НСР</p>
                    <input className='Router-inputt' type=""/>
                </div>
                </div>
                </div>
                <button style={{border:'none',width:'286px',height:'48px',background:'#18B3D4',borderRadius:'12px',color:'white'}}>Сохранить изменения</button>
               </div>
        </>
    );
}

export default RouterMoy1;
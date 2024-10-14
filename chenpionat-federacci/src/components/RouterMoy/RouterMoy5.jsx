import React from 'react';
import { Link } from 'react-router-dom';

function RouterMoy5(props) {
    return (
        <div className='ml-5 mt-5'>
            <div className='mt-1 mb-5'>
            <h2>Выйти из аккаунта</h2>
            <p>Отслеживайте свои результаты по пройденным турнирам</p>
            <Link to='/'><button style={{border:'none',width:'350px',height:'50px',background:'#18B3D4',borderRadius:'12px',color:'white',marginBottom:'50px',marginTop:'30px'}}> Выйти в аккаунта</button></Link>
            <div className="d-flex mb-4">
                <img style={{width:'110px',height:'110px',borderRadius:'10px'}} src="/images/29.png" alt="" />
                <img style={{width:'110px',height:'110px',borderRadius:'10px',marginLeft:'10px'}} src="/images/30.png" alt="" />
                <img style={{width:'110px',height:'110px',borderRadius:'10px',marginLeft:'10px'}} src="/images/31.png" alt="" />
            </div>
            <div className="d-flex">
                <img style={{width:'110px',height:'110px',borderRadius:'10px'}} src="/images/m3.png" alt="" />
                <img style={{width:'110px',height:'110px',borderRadius:'10px',marginLeft:'10px'}} src="/images/m5.png" alt="" />
                <img style={{width:'110px',height:'110px',borderRadius:'10px',marginLeft:'10px'}} src="/images/18.png" alt="" />
            </div>
        </div>
        </div>
    );
}

export default RouterMoy5;
import React from 'react';

function Routemoy2(props) {
    return (
        <div>
            <div className="ml-5 mt-5">
                <h2 style={{color:'#2A4C51',fontSize:'24px'}}>Изменить пароль</h2>
                <p style={{color:'#2A4C51'}}>Здесь вы можете изменить свой пароль для входа в аккаунт UGF</p>
                <div className="d-flex mt-4">
                <div className="">
                <p>Новый пароль</p>
                    <input className='Router-inputt' type="password" placeholder='• • • • • • • • • • •'/>
                </div>
                <div className="ml-4">
                <p>Подтвердите пароль</p>
                    <input className='Router-inputt' type="password" placeholder='• • • • • • • • • • •'/>
                </div>
                </div>
                <button style={{border:'none',width:'286px',height:'48px',background:'#18B3D4',borderRadius:'12px',color:'white',marginTop:'33%'}}>Сохранить изменения</button>
            </div>
        </div>
    );
}

export default Routemoy2;
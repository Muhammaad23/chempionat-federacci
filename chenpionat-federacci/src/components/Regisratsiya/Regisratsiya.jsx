import React from 'react';
import './regisratsiya.css';
import {Link} from 'react-router-dom';

function Reagisratsiya(props) {
    return (
        <>
        <div className="Router-login">
                <div className="img-3">
                    <img src="/images/1.png" alt="" className='kill-img-1'/>
                </div>
                <div className="Login-images">
                <Link to='/'><img className='img1' style={{whith:'135px', height:'58px'}} src="/images/2.png" alt="" /></Link>
               </div>
               </div>
            <div className="regis container">
            <div className="Loginn">
                  <div className="console">
                    <div className="">
                        <img className='just__img' style={{whith:'404px',height:'589px'}} src="/images/img.png" alt="" />
                        <div className="Login-headd">
                           <p style={{color:'#2A4C51',fontSize:'16px'}}>Профессиональный <br /> голифист Узбекистана</p>
                           <p style={{color:'#18B3D4',fontSize:'16px'}}>HCP: 6 | UGF ID: 00005365</p>
                        </div>
                    </div>
                    <div className="regis1 pt-5 ml-3">
                        <h3 className='dobro-h3' style={{color:'#000000'}}>Добро пожаловать на сайт <br /> Федерации Гольфа Узбекистана</h3>
                        <p className='pt-3 '>Используйте свой электронный адрес, чтобы войти <br /> в аккаунт/зарегестироваться.</p>
                        <div className="">
                        <p>ФИО</p>
                        <input type="text" className='input-emaill' placeholder='Слава Марлоу' />
                        </div>
                        <div className="">
                        <p>Номер телефона</p>
                        <input type="email" className='input-emaill' placeholder='+998 90 938 43 54' />
                        </div>
                        <div className="">
                        <p>Email</p>
                        <input type="email" className='input-emaill' placeholder='slava92@gmail.com' />
                        </div>
                        <div className="">
                        <p>Дата рождения</p>
                        <input className='input-emaill' type="date" id="bday" name="bday"/>
                        </div>
                        <div className="">
                        <p>НСР</p>
                        <input type="text" className='input-emaill' />
                        </div>
                        <div className="">
                        <p>Пароль</p>
                            <input type="password" className='input-passwordd' placeholder='• • • • • • • • • • •'/>
                        </div>
                        <div className="">
                        <p>Повторите пароль</p>
                         <input type="text" className='input-emaill' />
                         <div>
                             <Link to="/button"><button className='button__input'>Войти в аккаунт</button></Link>
                             </div>
                           <Link to='/Login'><img className='width-img' style={{width:'230px',height:'25px'}} src="/images/R1.png" alt="" /></Link>
                           
                        </div>
                    </div>
                  </div>
               </div>
            </div>
        </>
    );
}

export default Reagisratsiya;
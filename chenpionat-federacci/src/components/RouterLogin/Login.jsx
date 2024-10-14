import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

function Login(props) {
    return (
        <>
            <div className="">
                <div className="Router-login">
                <div className="img-3">
                    <img src="/images/1.png" alt="" className='kill-img-1'/>
                </div>
                <div className="Login-images">
                <Link to='/'><img className='img1' style={{whith:'135px', height:'58px'}} src="/images/2.png" alt="" /></Link>
               </div>
               </div>
               <div className="Login-1">
                  <div className="Login-flex">
                    <div className="">
                        <img className='just_img' src="/images/img.png" alt="" />
                        <div className="Login-head">
                           <p style={{color:'#2A4C51',fontSize:'16px'}}>Профессиональный <br /> голифист Узбекистана</p>
                           <p style={{color:'#18B3D4',fontSize:'16px'}}>HCP: 6 | UGF ID: 00005365</p>
                        </div>
                    </div>
                    <div className="login-bac pt-5 ml-3">
                        <h3 className='dobro-h3' style={{color:'#000000'}}>Добро пожаловать на сайт <br /> Федерации Гольфа Узбекистана</h3>
                        <p className='login__p pt-3 '>Используйте свой электронный адрес, чтобы войти <br /> в аккаунт/зарегестироваться.</p>
                        <div className="">
                        <p>Email</p>
                        <input type="email" className='input-email' placeholder='slava92@gmail.com' />
                        </div>
                        <div style={{flexWrap:'wrap'}}>
                            <p className='pt-3'>Пароль</p>
                            <input type="password" className='input-password' placeholder='• • • • • • • • • • •'/>
                            <div className="">
                             <Link to="/button"><button className='button_input mb-3'>Войти в аккаунт</button></Link>
                             </div>
                           <Link to="/regisratsiya"><img className='img-login' style={{width:'269px',height:'25px'}} src="/images/R.png" alt="" /></Link>
                        </div>
                    </div>
                  </div>
               </div>
               <div className="img-1">
                <img src="/images/1.png" alt="" className='kill-img-1'/>
            </div>
            </div>
        </>
    );
}

export default Login;
import React from 'react';
import './about.css';

function About(props) {
    return (
        <>
            <div className="about-1">
               <div className='style-about'>
                <h2 className='main-h2 mt-4'>Ближайшие события</h2>
                <p className='about-geoo'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру <br /> сгенерировать несколько абзацев более менее осмысленного текста </p>
               </div>
               <div className='about-2 mb-5 container'>
                <div className="" style={{textAlign:'center'}}>
                    <h4 className='alies-geeo'>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_img">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
                <div className="" style={{textAlign:'center'}}>
                    <h4 className='alies-geeo'>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_img1">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
                <div className="" style={{textAlign:'center'}}>
                    <h4 className='alies-geeo'>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_img2">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
               </div>
                <button className='button-1'>Все события</button>
            </div>
        </>
    );
}

export default About;
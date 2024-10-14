import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Cobitiya.css';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';
import Footer from '../Footer/Footer';

function Cobitiya(props) {
    return (
        <>
           <Navbar/>
           <div className="Golfa-style" style={{marginBottom:'79px'}}>
            <div className='container pt-3'>
                <a className='a-geo' href="#"><p>Главная <i><AiOutlineRight/></i> Ближайшие События</p></a>
                <a style={{textDecoration:'none'}} href="#"><h2 className='golfa-h2' style={{alignItems:"center"}}><span style={{color:'green'}}>Ближайшие </span> События <i style={{fontSize:'22px',marginLeft:'10px'}}><AiOutlineDown/></i></h2></a>
         </div>
         </div>
         <a className='a-geo-1' style={{textDecoration:'none'}} href="#"><p>Главная1 <i><AiOutlineRight/></i> Ближайшие События</p></a>
               <div className='alert-1 mb-4 container'>
                <div className="alies-wep">
                    <h4 style={{color:'#2A4C51',fontSize:'24px'}}>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_imgg">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
                <div className="alies-wep">
                    <h4 style={{color:'#2A4C51',fontSize:'24px'}}>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_imgg1">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
                <div className="alies-wep">
                    <h4 style={{color:'#2A4C51',fontSize:'24px'}}>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_imgg2">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
               </div>
               <div className='alert-1 container' style={{display:'flex',justifyContent:'space-between',marginBottom:'100px'}}>
                <div className="alies-wep">
                    <h4 style={{color:'#2A4C51',fontSize:'24px'}}>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_imgg">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
                <div className="alies-wep">
                    <h4 style={{color:'#2A4C51',fontSize:'24px'}}>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_imgg1">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
                <div className="alies-wep">
                    <h4 style={{color:'#2A4C51',fontSize:'24px'}}>Кубок страны/5 этап</h4>
                    <p style={{marginBottom:'32px',fontSize:'16px'}}>Этап пройдет <span style={{color:'red'}}> с 6 по 20 сентября 2020.</span> <br />
                      Не упустите шанс зарегестрироваться на <br /> отборочный этап уже сегодня!</p>
                    <div className="About_imgg2">
                        <div style={{paddingTop:'158px'}}>
                        <button className='about-button'>Принять участие</button></div>
                    </div>
                </div>
               </div>
            <Footer/>
        </>
    );
}

export default Cobitiya;
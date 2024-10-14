import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './galareya.css';
import { AiOutlineRight } from 'react-icons/ai';

function Galareya(props) {
    return (
        <>
            <Navbar/>
            <div className="Golfa-style" style={{marginBottom:'79px'}}>
            <div className='container pt-3'>
                <a className='a-geo' href="#"><p>Главная <i><AiOutlineRight/></i> Галерея</p></a>
                <h2 className='golfa-h2'>Галерея</h2>
         </div>
         </div>
         <a className='a-geo-1' style={{textDecoration:'none'}} href="#"><p>Главная <i><AiOutlineRight/></i> Галерея</p></a>
         <div className="container" style={{marginBottom:'100px'}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'30px'}} className='img7'>
                <div className="zip-list">
                    <img className='huerotate' style={{width:'354px',height:'245px'}} src="/images/m.png" alt="" />
                    <p style={{paddingTop:'15px',textAlign:'center'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
                </div>
                <div className="zip-list">
                    <img className='huerotate' style={{width:'354px',height:'245px'}} src="/images/m1.png" alt="" />
                    <p style={{paddingTop:'15px',textAlign:'center'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
                </div>
                <div className="zip-list">
                    <img className='huerotate' style={{width:'354px',height:'245px'}} src="/images/m2.png" alt="" />
                    <p style={{paddingTop:'15px',textAlign:'center'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'50px'}} className='img7'>
                <div className="zip-list">
                    <img className='huerotate' style={{width:'354px',height:'245px'}} src="/images/m3.png" alt="" />
                    <p style={{paddingTop:'15px',textAlign:'center'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
                </div>
                <div className="zip-list">
                    <img className='huerotate' style={{width:'354px',height:'245px'}} src="/images/m4.png" alt="" />
                    <p style={{paddingTop:'15px',textAlign:'center'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
                </div>
                <div className="zip-list">
                    <img className='huerotate' style={{width:'354px',height:'245px'}} src="/images/m5.png" alt="" />
                    <p style={{paddingTop:'15px',textAlign:'center'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
                </div>
            </div>
                <button className='button-3'>Показать еще</button>
         </div>
                <Footer/>
        </>
    );
}

export default Galareya;
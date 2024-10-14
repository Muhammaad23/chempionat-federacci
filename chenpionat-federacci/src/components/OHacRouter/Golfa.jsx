import React from 'react';
import './golfa.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AiOutlineRight } from 'react-icons/ai';
import Head from '../Head/Head';

function Golfa(props) {
    return (
        <>
        <Navbar />
        <div className="Golfa-style" style={{marginBottom:'79px'}}>
            <div className='container pt-3'>
                <a className='a-geo' href="#"><p>Главная <i><AiOutlineRight/></i> O Hac</p></a>
                <h2 className='golfa-h2'>О Федерации Гольфа Узбекистана</h2>
         </div>
         </div>
         <a className='a-geo-1' style={{textDecoration:'none'}} href="#"><p>Главная <i><AiOutlineRight/></i> O Hac</p></a>
         <div className='container'>
           <div style={{display:'flex',justifyContent:'space-between',marginBottom:'120px'}} className="kret">
               <div className='onclik-p'>
                   <h4 className='golfa-geo mb-3'>Федерации    Гольфа Узбекистана <br /> основана в 2000 году</h4>
                   <p className='onclik-style'>Сайт рыбатекст поможет    дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более    менее осмысленного текста рыбы на русском языке, а начинающему оратору    отточить навык публичных выступлений в домашних условиях. 
                   При создании генератора мы использовали небезизвестный универсальный код    речей. </p>
               </div>
                  <div>
                      <img className="router-images" src="/images/golf.png"       alt="" />
                  </div>
            </div>
                   <div style={{display:'flex',justifyContent:'space-between',       marginBottom:'120px'}} className="kret">
                   <div>
                       <img className="router-images" src="/images/a.png"        alt="" />
                   </div>
                   <div className='onclik-p'>
                       <h4 className='golfa-geo mb-3'>Первый клуб в Центр. Азии</h4>
                       <p className='onclik-style'>Сайт рыбатекст поможет        дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более        менее осмысленного текста рыбы на русском языке, а начинающему оратору        отточить навык публичных выступлений в домашних условиях. 
                       При создании генератора мы использовали небезизвестный универсальный код        речей. </p>
                   </div>
                   </div>
                   <div style={{display:'flex',justifyContent:'space-between',marginBottom:'120px'}} className="kret">
               <div className='onclik-p'>
                   <h4 className='golfa-geo mb-3'>Федерации    Гольфа Узбекистана <br /> основана в 2000 году</h4>
                   <p className='onclik-style'>Сайт рыбатекст поможет    дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более    менее осмысленного текста рыбы на русском языке, а начинающему оратору    отточить навык публичных выступлений в домашних условиях. 
                   При создании генератора мы использовали небезизвестный универсальный код    речей. </p>
               </div>
                  <div>
                      <img className="router-images" src="/images/b.png"       alt="" />
                  </div>
            </div>
            </div>
            <Head/>
           <Footer/>
        </>
    );
}

export default Golfa;
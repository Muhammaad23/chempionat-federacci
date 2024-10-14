import React from 'react';
import "./document.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AiOutlineRight } from 'react-icons/ai';


function Document(props) {
    return (
        <>
            <Navbar/>
              <div className="Golfa-style" style={{marginBottom:'79px'}}>
              <div className='container pt-3'>
                <a className='a-geo' href="#"><p>Главная <i><AiOutlineRight/></i> Документы</p></a>
                <h2 className='golfa-h2'>Документы</h2>
              </div>
              </div>
              <a className='a-geo-1' style={{textDecoration:'none'}} href="#"><p>Главная <i><AiOutlineRight/></i> Документы</p></a>
            <div className="wepp container" style={{display:'flex',justifyContent:'space-around',marginBottom:'120px'}}>
               <div className="app-wep mb-3">
                  <div className="">
                     <div className='align-1'>
                        <img style={{width:'32px',height:'36px'}} src="/images/papka.png" alt="" />
                        <p className='app-p'>Сайт рыбатекст поможет дизайнеру, верстальщику, <br /> вебмастеру сгенерировать несколько абзацев </p>
                        <img style={{whith:'32px',height:'32px',marginLeft:'30px'}} src="/images/2x.png" alt="" />
                    </div>
                    <div className='border-1'></div>
                </div>
                <div className="">
                    <div className='align-1'>
                        <img style={{width:'36px',height:'36px'}} src="/images/x.png" alt="" />
                        <p className='app-p'>Сайт рыбатекст поможет дизайнеру, верстальщику, <br /> вебмастеру сгенерировать несколько абзацев </p>
                        <img style={{whith:'32px',height:'32px',marginLeft:'30px'}} src="/images/2x.png" alt="" />
                    </div>
                    <div className='border-1'></div>
                </div>
                <div className="">
                    <div className='align-1'>
                        <img style={{width:'32px',height:'36px'}} src="/images/pdf.png" alt="" />
                        <p className='app-p'>Сайт рыбатекст поможет дизайнеру, верстальщику, <br /> вебмастеру сгенерировать несколько абзацев </p>
                        <img style={{whith:'32px',height:'32px',marginLeft:'30px'}} src="/images/2x.png" alt="" />
                    </div>
                    <div className='border-1'></div>
                </div>
                <div className="">
                    <div className='align-1'>
                        <img style={{width:'36px',height:'36px'}} src="/images/x.png" alt="" />
                        <p className='app-p'>Сайт рыбатекст поможет дизайнеру, верстальщику, <br /> вебмастеру сгенерировать несколько абзацев </p>
                        <img style={{whith:'32px',height:'32px',marginLeft:'30px'}} src="/images/2x.png" alt="" />
                    </div>
                    <div className='border-1'></div>
                </div>
                <div className="">
                    <div className='align-1'>
                        <img style={{width:'32px',height:'36px'}} src="/images/papka.png" alt="" />
                        <p className='app-p'>Сайт рыбатекст поможет дизайнеру, верстальщику, <br /> вебмастеру сгенерировать несколько абзацев </p>
                        <img style={{whith:'32px',height:'32px',marginLeft:'30px'}} src="/images/2x.png" alt="" />
                    </div>
                    <div className='border-1'></div>
                </div>
                <div className="">
                    <div className='align-1'>
                        <img style={{width:'32px',height:'34px'}} src="/images/pdf.png" alt="" />
                        <p className='app-p'>Сайт рыбатекст поможет дизайнеру, верстальщику, <br /> вебмастеру сгенерировать несколько абзацев </p>
                        <img style={{whith:'32px',height:'32px',marginLeft:'30px'}} src="/images/2x.png" alt="" />
                    </div>
                    <div className='border-1'></div>
                </div>
                <div className="">
                    <div className='align-1'>
                        <img className='align-img' src="/images/papka.png" alt="" />
                        <p className='app-p'>Сайт рыбатекст поможет дизайнеру, верстальщику, <br /> вебмастеру сгенерировать несколько абзацев </p>
                        <img style={{whith:'32px',height:'32px',marginLeft:'30px'}} src="/images/2x.png" alt="" />
                    </div>
                    <div className='border-1'></div>
                </div>
            </div>
            <div className='document-text'>
                <img style={{width:'90px',height:'90px',display:'flex',margin:'auto',marginTop:'48px',marginBottom:'20px'}} src="/images/d.png" alt="" />
                <h3 className='document-h3'>Возникли вопросы по документам? <br /> Заполните форму ниже.</h3>
                 <div className="ml-5 pt-3">
                <div className="mb-2">
                    <p>Имя</p>
                    <input className='input-text' type="text" placeholder='Вячеслав' />
                </div>
                <div className="mb-2">
                    <p>Email</p>
                    <input className='input-text' type="Email" placeholder='slava92@gmail.com' />
                </div>
                <div className="">
                    <p>Сообщение</p>
                    <input className='inputt mb-3' type="text"/>
                    <button className='button-text'>Отправить запрос</button>
                </div>
                </div>
            </div>
         </div>
            <Footer/>
        </>
    );
}

export default Document;
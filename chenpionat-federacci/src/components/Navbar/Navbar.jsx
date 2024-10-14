import React, { useState } from 'react';
import './navbar.css';
import { BsPersonCircle } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineDoubleRight } from 'react-icons/ai';

function Navbar(props) {
    const [isMobile, setIsmobile] = useState(false);
    return (
        <>
         <header className="Navbar-stykic">
         <div className="img-5">
                    <img src="/images/1.png" alt=""  className='imgg'/>
                </div>
            <div className="App-logo">
                <nav className="loggo container">
               <Link to='/'>
                <img style={{whith:'130px', height:'57px'}} src="/images/2.png" alt="" />
               </Link>
               <ul className={isMobile? "nav-links-mobile": "nav-links"}
               onClick={() => setIsmobile(false)}>
                <Link className='Link-a' style={{textDecoration:'none'}} to="/golfa">О нас</Link>
                <Link className='Link-a' style={{textDecoration:'none'}} to="/golfis">Гольфисты Узбекистана</Link>
                <Link className='Link-a' style={{textDecoration:'none'}} to="/golfe">Информация о гольфе</Link>
                <Link className='Link-a' style={{textDecoration:'none'}} to="/document">Документы</Link>
                <Link className='Link-a' style={{textDecoration:'none'}} to="/galareya">Галерея</Link>
                <Link className='Link-a' style={{textDecoration:'none'}} to="/cobitiya">События</Link>
               <div style={{display:'flex',alignItems:'center'}}>
                <Link  className="Link-a-1" to="/Login"><i style={{color:'#18B3D4',fontSize:'20px',marginLeft:'6px'}}><BsPersonCircle/></i>Войти в аккаунт</Link>
               </div>
               </ul>
               <button className='mobile-menu-icon'
               onClick={() => setIsmobile(!isMobile)}>
                {isMobile ? <i><AiOutlineDoubleRight/></i>: <i><HiOutlineMenuAlt3/></i>}
               </button>
            </nav>
            </div>
         </header>
        </>
    );
}

export default Navbar;
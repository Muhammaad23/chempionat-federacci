import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './empoloye.css';

function Employe(props) {
    return (
        <>
            <div className="container">
                <div style={{background:'#EAEAEA',whith:'100%',height:'712px',borderRadius:'20px',Opacity:'30%'}}>
                    <div style={{textAlign:'center',paddingTop:'90px',marginBottom:'50px'}}>
                        <h2 className='color-galareya'>Галерея</h2>
                        <p className='color-p' style={{color:'grey'}}>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру <br /> сгенерировать несколько абзацев более менее осмысленного текста </p>
                    </div>
                    <div className="">
                    <Carousel>
              <Carousel.Item>
               <div className="kill">
                <div>
               <img style={{whith:'315px',height:'231px'}}
                 className="d-block"
                 src="/images/18.png"
                 alt="Second slide"
               />
               <p className='color_p' style={{textAlign:'center',paddingTop:'10px',color:'#2A4C51'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
               </div>
                <div>
               <img style={{whith:'315px',height:'231px'}}
                 className="d-block ml-3"
                 src="/images/18.png"
                 alt="Second slide"
               />
                <p style={{textAlign:'center',paddingTop:'10px',fontSize:'16px',color:'#2A4C51'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
               </div>
                <div>
               <img style={{whith:'315px',height:'231px'}}
                 className="d-block ml-3"
                 src="/images/18.png"
                 alt="Second slide"
               /><p style={{textAlign:'center',paddingTop:'10px',fontSize:'16px',color:'#2A4C51'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p></div>
               </div>
             </Carousel.Item>
             <Carousel.Item>
             <div style={{display:'flex',justifyContent:'center'}}>
                <div>
               <img style={{whith:'315px',height:'231px'}}
                 className="d-block"
                 src="/images/18.png"
                 alt=""
               />
               <p style={{textAlign:'center',paddingTop:'10px',fontSize:'16px',color:'#2A4C51'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
               </div>
                <div>
               <img style={{whith:'315px',height:'231px'}}
                 className="d-block ml-3"
                 src="/images/18.png"
                 alt=""
               />
                <p style={{textAlign:'center',paddingTop:'10px',fontSize:'16px',color:'#2A4C51'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p>
               </div>
                <div>
               <img style={{whith:'315px',height:'231px'}}
                 className="d-block ml-3"
                 src="/images/18.png"
                 alt=""
               /><p style={{textAlign:'center',paddingTop:'10px',fontSize:'16px',color:'#2A4C51'}}>Чемпионат 2020, турнир 2/ этап 5, <br /> Победитель Югай Александр</p></div>
               </div>
             </Carousel.Item>
         </Carousel>
         <a href='#' style={{display:'flex',justifyContent:'center',whith:'50px',height:'10px',marginTop:'50px'}}>
          <img src="/images/i.png" alt="" />
         </a>
                    </div>
                    <div style={{position:'absolute',zIndex:'-5',right:'0'}}>
                      <img className='index-img' style={{whith:'160px',height:'330px',marginTop:'-10px'}} src="/images/19.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Employe;
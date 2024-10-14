import React from 'react';
import './head.css';

function Head(props) {
    return (
        <>
            <div className="container">
                <div style={{textAlign:'center',paddingTop:'80px',marginBottom:'50px'}}>
                    <h2 className='style-geo'>Наши партнеры</h2>
                    <p className='geo-style'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру <br /> сгенерировать несколько абзацев более менее осмысленного текста </p>
                </div>
                <div style={{whith:'500px',height:'1px',background:'#C0CCDA'}}></div>
                <div style={{display:'flex',justifyContent:'space-between',padding:'45px 0 45px 0'}} className='game-images-list'>
                    <img className='Head-logo' style={{wigth:'94px',height:'39px'}} src="/images/22.png" alt="" />
                    <img className='Head-logo' style={{wigth:'90px',height:'34px'}} src="/images/23.png" alt="" />
                    <img className='Head-logo' style={{wigth:'141px',height:'30px'}} src="/images/24.png" alt="" />
                    <img className='Head-logo' style={{wigth:'124px',height:'28px'}} src="/images/25.png" alt="" />
                    <img className='Head-logo' style={{wigth:'106px',height:'45px'}} src="/images/26.png" alt="" />
                    <img className='Head-logo' style={{wigth:'111px',height:'26px'}} src="/images/27.png" alt="" />
                </div>
                <div style={{whith:'600px',height:'1px',background:'#C0CCDA'}}></div>
                <div style={{display:'flex',justifyContent:'space-around',padding:'45px 0 45px 0'}} className='game-images-list'>
                    <img className='Head-logo' style={{wigth:'106px',height:'45px'}} src="/images/26.png" alt="" />
                    <img className='Head-logo' style={{wigth:'124px',height:'28px'}} src="/images/25.png" alt="" />
                    <img className='Head-logo' style={{wigth:'90px',height:'34px'}} src="/images/23.png" alt="" />
                    <img className='Head-logo' style={{wigth:'111px',height:'26px'}} src="/images/27.png" alt="" />
                    <img className='Head-logo' style={{wigth:'141px',height:'30px'}} src="/images/24.png" alt="" />
                </div>
                <div style={{whith:'600px',height:'1px',background:'#C0CCDA',marginBottom:'80px'}}></div>
            </div>
        </>
    );
}

export default Head;
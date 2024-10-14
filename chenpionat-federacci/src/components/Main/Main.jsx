import React from 'react';
import './main.css';

function Main(props) {
    return (
        <>
            <div className="container" style={{marginBottom:'80px', width: '100%'}}>
                <div className='dark-wep'>
                    <h2 className='main-h2'>О Федерации Гольфа Узбекистана</h2>
                    <p className='geo'>Это международный проект, в строительстве которого участвовали <br /> специалисты из Южной Кореи и Узбекистана. </p>
                </div>
                <div className='fride d-flex'>
                    <div className='flr'>
                        <img style={{whith:'187px',height:'187px',margin:'auto',display:'flex'}} src="/images/4.png" alt="" />
                       <p className='geo-1'><b style={{color:'#242424'}}>Основана в 2000 году</b></p>
                       <p className='geo-2'>Главная задача этой организации заключается в популяризации данного вида спорта среди граждан Узбекистана</p>
                    </div>
                    <div className='flr'>
                        <img style={{whith:'187px',height:'187px',margin:'auto',display:'flex'}} src="/images/5.png" alt="" />
                       <p className='geo-1'><b style={{color:'#242424'}}>Площадь клуба 100 гектаров</b></p>
                       <p className='geo-2'>На территории клуба, помимо полей для гольфа, располагаются ресторан, гостиница, бассейн</p>
                    </div>
                    <div className='flr'>
                        <img style={{whith:'187px',height:'187px',margin:'auto',display:'flex'}} src="/images/6.png" alt="" />
                       <p className='geo-1'><b style={{color:'#242424'}}>Первый клуб в Центр. Азии</b></p>
                       <p className='geo-2'>Это первый клуб международного стандарта, состоящий из 18 лунок, и для каждой лунки имеется своё поле</p>
                    </div>
                </div>
                <div className="index-img">
                    <img className='index_img' src="/images/7.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Main;
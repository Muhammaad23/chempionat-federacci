import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AiOutlineRight } from 'react-icons/ai';

function Golfe(props) {
    return (
        <>
            <Navbar/>
            <div className="Golfa-style" style={{marginBottom:'79px'}}>
            <div className='container pt-3'>
                <a className='a-geo' href="#"><p>Главная <i><AiOutlineRight/></i> Информация о гольфе</p></a>
                <h2 className='golfa-h2'>Информация о гольфе</h2>
         </div>
         </div>
         <a className='a-geo-1' style={{textDecoration:'none'}} href="#"><p>Главная <i><AiOutlineRight/></i> Информация о гольфе</p></a>
         <div className="dark-play mb-4">
                    <div className="style-border">
                        <img className='game-img' src="/images/20.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                    <div className="style-border ml-4">
                        <img className='game-img' src="/images/29.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                    <div className="style-border ml-4">
                        <img className='game-img' src="/images/30.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                    <div className="style-border ml-4">
                        <img className='game-img' src="/images/31.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                </div>
         <div className="dark-play mb-5">
                    <div className="style-border">
                        <img className='game-img' src="/images/30.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                    <div className="style-border ml-4">
                        <img className='game-img' src="/images/31.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                    <div className="style-border ml-4">
                        <img className='game-img' src="/images/20.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                    <div className="style-border ml-4">
                        <img className='game-img' src="/images/29.png" alt="" />
                        <div className="pt-2">
                        <p>2 мая, 2020</p>
                        <p style={{color:'#2A4C51'}}><b> Открытый чемпионат по гольфу в <br /> Ташкенте</b></p>
                        <p>Завершился Открытый чемпионат <br /> Республики Узбекистан...</p>
                        </div>
                    </div>
                </div>
                <button className="button-1" style={{marginBottom:'80px'}}>
                Смотреть все
                </button>
            <Footer/>
        </>
    );
}

export default Golfe;
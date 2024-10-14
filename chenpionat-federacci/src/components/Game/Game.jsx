import React from 'react';
import './game.css'

function Game(props) {
    return (
        <>
            <div className="container">
                <div style={{textAlign:'center',marginTop:'80px',marginBottom:'50px'}}>
                    <h2 className='style-geo'>Информация о гольфе</h2>
                    <p className='geo-style'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру <br /> сгенерировать несколько абзацев более менее осмысленного текста </p>
                </div>
                <div className="dark-play mb-5">
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
                <button className="button-1">
                Смотреть все
                </button>
            </div>
            <div className="index-img">
                    <img className='game-images' src="/images/21.png" alt="" />
                </div>
        </>
    );
}

export default Game;
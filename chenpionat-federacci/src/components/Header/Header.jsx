import React from 'react';
import './header.css'

function Header(props) {
    return (
        <>
           <div className="header-img">
              <div className='logo-1'>
                 <h2 className='just-kill'>В Ташкенте стартовал Чемпионат <br /> Узбекистана по гольфу 2021</h2>
                 <p className='kb mb-4'>Недавно в состав Федерации гольфа Узбекистана был <br /> избран новый Председатель. Руководство Федерации <br /> уже начало осуществление новых планов.</p>
                 <button className='button mt-2'>Подробнее</button>
              </div>
            </div> 
        </>
    );
}

export default Header;
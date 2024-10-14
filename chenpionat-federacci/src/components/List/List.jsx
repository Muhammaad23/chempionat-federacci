import React from 'react';
import './list.css'

function List(props) {
    return (
        <>
            <div className='List'>
                <div className="index-img-1">
                    <img className='List-images' src="/images/12.png" alt="" />
                </div>
                <div className="list-server">
                <div style={{textAlign:'center',marginBottom:'60px'}}>
                    <h2 className='style-geo'>Гольфисты Узбекистана</h2>
                    <p className='server_p'>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру <br /> сгенерировать несколько абзацев более менее осмысленного текста </p>
                </div>
                <div className='List-style container' style={{marginBottom:'62px',display:'flex',justifyContent:'center'}}>
                    <div className="apple">
                        <img style={{whith:'120px',height:'120px',marginBottom:'16px',margin:'auto',display:'flex'}} src="/images/13.png" alt="" />
                        <p className='img-geo'>Taxirov Dilshod</p>
                        <p className='img-geo-1' style={{color:'#18B3D4'}}>HCP: 6 | UGF ID: 00005365</p>
                    </div>
                    <div className="apple">
                        <img style={{whith:'120px',height:'120px',marginBottom:'16px',margin:'auto',display:'flex'}} src="/images/14.png" alt="" />
                        <p className='img-geo'>Taxirov Dilshod</p>
                        <p className='img-geo-1' style={{color:'#18B3D4'}}>HCP: 6 | UGF ID: 00005365</p>
                    </div>
                    <div className="apple">
                        <img style={{whith:'120px',height:'120px',marginBottom:'16px',margin:'auto',display:'flex'}} src="/images/15.png" alt="" />
                        <p className='img-geo'>Taxirov Dilshod</p>
                        <p className='img-geo-1' style={{color:'#18B3D4'}}>HCP: 6 | UGF ID: 00005365</p>
                    </div>
                    <div className="apple">
                        <img style={{whith:'120px',height:'120px',marginBottom:'16px',margin:'auto',display:'flex'}} src="/images/16.png" alt="" />
                        <p className='img-geo'>Taxirov Dilshod</p>
                        <p className='img-geo-1' style={{color:'#18B3D4'}}>HCP: 6 | UGF ID: 00005365</p>
                    </div>
                    <div className="apple">
                        <img style={{whith:'120px',height:'120px',marginBottom:'16px',margin:'auto',display:'flex'}} src="/images/17.png" alt="" />
                        <p className='img-geo'>Taxirov Dilshod</p>
                        <p className='img-geo-1' style={{color:'#18B3D4'}}>HCP: 6 | UGF ID: 00005365</p>
                    </div>
                </div>
                <button className='button-1' style={{marginBottom:'80px'}}>Все гольфисты</button>
            </div>
            </div>
        </>
    );
}

export default List;
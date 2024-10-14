import React from 'react';
import './footer.css';
import { RiFacebookFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

function Footer(props) {
    return (
        <>
        <div className="">
                <img src="/images/1.png" alt=""  className='app-img'/>
            </div>
            <div className="footer">
                <div className="footer-list container">
                    <div className="footer-1">
                        <div className="flex-footer">
                        <div className="img-footer">
                        <img style={{whith:'63px',height:'117px'}} src="/images/28.png" alt="" />
                        </div>
                        <div className="skul">
                        <div className="images-1">
                        <img className='img-f' src="/images/2.png" alt="" />
                        </div>
                            <div className="ml-4 mb-3">
                            <li style={{listStyle:'none'}} className='li-footer'><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>+998 97 733 30 06</a></li>
                            <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>rugrid91@gmail.com</a></li>
                            </div>
                            <div className='clor ml-4 d-flex'>
                                <a href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&q=facebook&rlz=1C1YKST_enUZ1002UZ1002&oq=fa&aqs=chrome.1.69i57j46i67i131i199i433i465j46i67j0i433i512j0i67i131i433j0i131i433i512j0i67j46i131i199i433i465i512j0i67.1296j0j7&sourceid=chrome&ie=UTF-8"><i className='iconss'><RiFacebookFill/></i></a>
                                <a href="https://www.google.com/search?q=instagram&rlz=1C1YKST_enUZ1002UZ1002&oq=i&aqs=chrome.1.69i57j0i131i433i512j0i131i433j46i131i175i199i433i512j0i131i433i512l3j46i175i199i433i512j0i131i433i512j46i131i199i433i465i512.1832j0j7&sourceid=chrome&ie=UTF-8"><i className='iconss ml-2'><BsInstagram/></i></a>
                                <a href="https://www.google.com/search?q=telegram&rlz=1C1YKST_enUZ1002UZ1002&oq=tel&aqs=chrome.1.69i57j0i67i131i433j0i67l2j0i131i433i512j0i67l2j0i131i433i512j0i67j0i433i512.3507j0j7&sourceid=chrome&ie=UTF-8"><i className='iconss ml-2'><FaTelegramPlane/></i></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="a-3">
                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>Главная</a></li>
                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>О нас</a></li>                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>События</a></li>
                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>Гольфисты</a></li>
                    </div>
                    <div className="a-3">
                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>Информация о гольфе</a></li>
                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>Галерея</a></li>
                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>Публичная оферта</a></li>
                        <li style={{listStyle:'none'}}><a href="#" style={{textDecoration:'none',color:'#F7F7F7',fontSize:'16px'}}>Политика конфедециальности</a></li>
                    </div>
                       <select name="cars" id="cars" className='select-1'>
                       <option value="volvo">Рус</option>
                       <option value="saab">Eng</option>
                       <option value="opel">Uzb</option>
                       </select>
                  </div>
                  <div className="footer-head"></div>
                  <div className="footer-p">
                      <p className='pers' style={{color:'#EAEAEA'}}>© 2020. Uzbekistan Golf Federation. All Rights Reserved.</p>
                  </div>
            </div>
        </>
    );
}

export default Footer;
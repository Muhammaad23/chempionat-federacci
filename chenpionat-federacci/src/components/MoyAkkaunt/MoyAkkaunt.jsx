import React from 'react';
import Navbar from '../Navbar/Navbar';
import './moyakkaunt.css';
import { AiOutlineRight } from 'react-icons/ai';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import RouterMoy1 from '../RouterMoy/RouterMoy1';
import Routemoy2 from '../RouterMoy/Routemoy2';
import Footer from '../Footer/Footer';
import RouterMoy3 from '../RouterMoy/RouterMoy3';
import RouterMoy4 from '../RouterMoy/RouterMoy4';
import RouterMoy5 from '../RouterMoy/RouterMoy5';
import { FaRegUser } from "react-icons/fa";
import { TbLock } from "react-icons/tb";
import { BiCalendar } from "react-icons/bi";
import { BsJournalMedical } from "react-icons/bs";
import { BsBoxArrowRight } from "react-icons/bs";

function MoyAkkaunt(props) {
    return (
        <>
            <Navbar/>
            <div className="Golfa-style" style={{marginBottom:'79px'}}>
            <div className='container pt-3'>
                <a className='a-geo' href="#"><p>Главная <i><AiOutlineRight/></i> Мой аккаунт</p></a>
                <h2 style={{fontSize:'36px',color:'#2A4C51',display:'flex',justifyContent:'center',paddingTop:'15px'}} className="moy-ak">Мой аккаунт</h2>
         </div>
         </div>
         <a className='a-geo-1' style={{textDecoration:'none'}} href="#"><p>Главная <i><AiOutlineRight/></i> Мой аккаунт</p></a>
         <div className="Moy-list container">
         <div style={{width:'1px',height:'583px',background:'#cacaca',position:'absolute',zIndex:'1',marginLeft:'250px'}} className='margin-list'></div>
            <div>
                <div className="pt-5 ml-5 mb-3">
                <img style={{width:'60px',height:'60px',borderRadius:'50%',marginLeft:'40px',marginBottom:'15px'}} src="/images/m6.png" alt="" />
                <p>Изменить   |   Удалить</p>
                </div>
         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3} style={{display:'flex'}}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item className='mb-2'>
              <Nav.Link eventKey="first"><i style={{fontSize:'18px'}}><FaRegUser/></i> Личные данные</Nav.Link>
            </Nav.Item>
            <Nav.Item className='mb-2'>
              <Nav.Link eventKey="second"><i style={{fontSize:'23px'}}><TbLock/></i> Изменить пароль</Nav.Link>
            </Nav.Item>
            <Nav.Item className='mb-2'>
              <Nav.Link eventKey="alies"><i style={{fontSize:'23px'}}><BiCalendar/></i> Заявки на турниры</Nav.Link>
            </Nav.Item>
            <Nav.Item className='mb-2'>
              <Nav.Link eventKey="form"><i style={{fontSize:'20px'}}><BsJournalMedical/></i> Мои результаты</Nav.Link>
            </Nav.Item>
            <div style={{width:'265px',height:'1px',background:'#cacaca',marginBottom:'15px',marginTop:'15px',marginLeft:'-15px'}}></div>
            <Nav.Item>
              <Nav.Link eventKey="from"><i style={{fontSize:'22px'}}><BsBoxArrowRight/></i> Выйти из аккаунта</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <div className="kk"></div>
        <Col sm={9}>
          <Tab.Content style={{marginTop:'-150px'}}>
            <Tab.Pane eventKey="first">
            <RouterMoy1/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Routemoy2/>
            </Tab.Pane>
            <Tab.Pane eventKey="alies">
            <RouterMoy3/>
            </Tab.Pane>
            <Tab.Pane eventKey="form">
            <RouterMoy4/>
            </Tab.Pane>
            <Tab.Pane eventKey="from">
              <RouterMoy5/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
         </div>
         <Footer/>
        </>
    );
}

export default MoyAkkaunt;
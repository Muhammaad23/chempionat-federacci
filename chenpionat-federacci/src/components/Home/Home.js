import React from 'react';
import About from '../About/About';
import Employe from '../Employe/Employe';
import Footer from '../Footer/Footer';
import Game from '../Game/Game';
import Head from '../Head/Head';
import Header from '../Header/Header';
import List from '../List/List';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

function Home(props) {
    return (
        <>
            <Navbar/>
            <Header/>
            <Main/>
            <About/>
            <List/>
            <Employe/>
            <Game/>
            <Head/>
            <Footer/>
        </>
    );
}

export default Home;
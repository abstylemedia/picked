
import React  from 'react';
import Navbar from './navbar';
import Main from './main';
import Google from './google';
import Apps from './apps';
import Footer from './footer';

    

const Home = () =>{
    return(
      <div>
      <Navbar/>
      <Main/>
      <Google/>
      <Apps/>
      <Footer/>
     </div>

    );
};
export default Home;
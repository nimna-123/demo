import React from 'react'
import Header from "./components/Header/Header";
import Banner from './components/Banner/Banner';
import Count from './components/Count/Count';
import ShopNow from './components/ShopNow/ShopNow';
import About from './components/About/About';
import ShopbyCategory from './components/ShopbyCategory/ShopbyCategory';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <React.Fragment>
       <Header/>
   <Banner/>
   <Count/>
   <ShopNow/>
   <About/>
   <ShopbyCategory/>
   <Footer/>
   

    </React.Fragment>
  
  );
}

export default App;

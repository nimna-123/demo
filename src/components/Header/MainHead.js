import React,{useState,useEffect} from 'react'
import Classes from './Header.module.css'
import Logo from '../../assets/Images/logo.svg'
import MobLogo from '../../assets/Images/logMob.png'
import SideDrawer from './SideDrawer'
import DrawerToggle from './DrawerToggle'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
const MainHead = (props) =>{
    const[showSideDrawer,setShowSideDrawer] = useState(false)
    const  sideDrawerHnadler = () =>{
        setShowSideDrawer(false)
    }
    const drawertoggleHandler = () =>{
            setShowSideDrawer(prevState => !prevState)
    } 
    return(
        <div className='container-fluid'>
            <div className={Classes.Main}>
                <img src={Logo} alt='logo'/>
               <ul className={Classes.NavItems}>
                <li>Home</li>
                <li>Shop All</li>
                <li>Special day</li>
                <li>About us</li>

               </ul>
               <div className={Classes.Search}>
                <input type='text' placeholder='Search product'/>

               </div>
               <div className={Classes.UserProfile}>
                <p>Log In</p>
                <AiOutlineShoppingCart  size={25} color="#000000" className={Classes.CartIcon}/>
                <FaUserAlt  size={25} color="#000000" className={Classes.CartIcon}/>
                
               </div>
                </div>
                <header className={Classes.MobileHeader}>
                <div id="brand"  className={Classes.logo}><img src={MobLogo} alt='logoMob'/></div>
              <DrawerToggle clicked={drawertoggleHandler}/>
              <SideDrawer closed={sideDrawerHnadler} 
                           open={showSideDrawer}></SideDrawer>
                </header>

          

        </div>

    )
}
export default MainHead
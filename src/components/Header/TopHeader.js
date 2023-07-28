import React from 'react'
import Classes from './Header.module.css'
import {AiOutlineDown } from "react-icons/ai";
import {RxDividerVertical} from "react-icons/rx"

const TopHeader = () =>{
    return(
       
        <div className={Classes.Header_top}>
            <div></div>
            <div className={Classes.HeaderCenter}>Get 50% off on selected items<RxDividerVertical color="#000000" size={25}/><span className={Classes.shopNow}>Shop Now</span></div>
        <div className={Classes.HeaderTop_Text}>
          <div className={Classes.Top}>
            <p className={Classes.Lang}>ENG&nbsp;<AiOutlineDown color='#FFFFFF' className={Classes.ArrowIcon}/></p>
            <p className={Classes.Lang}>Location&nbsp;<AiOutlineDown color='#FFFFFF' className={Classes.ArrowIcon}/></p>
          </div>
          
        </div>
      </div>
     

    )
}
export default TopHeader
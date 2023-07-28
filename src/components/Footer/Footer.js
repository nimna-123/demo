import React from 'react'
import Classes from './Footer.module.css'
import Logo from '../../assets/Images/logoFoot.png'
import MobLogo from '../../assets/Images/logoFootMob.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillYoutube,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
const Footer = ()=>{
    return(
        <div className={Classes.Footer}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4 col-4'>
                        <div className={Classes.Desk}>
                        <img src={Logo} alt='logo' className={Classes.Logo}/>

                        </div>
                        <div className={Classes.Mob}>
                        <img src={MobLogo} alt='logo' className={Classes.Logo}/>

                        </div>
                       
                        <div className={Classes.Subscribe}>
                            <label>Subscribe To Our Email </label><br/>
                            <input type="text" placeholder='email.com'/>
                        </div>

                    </div>
                    <div className='col-md-2 col-2'>
                        <div className={Classes.Head}>Green box</div>
                        <ul className={Classes.SubHead}>
                            <li>Home </li>
                            <li>About </li>
                            <li>Categories </li>
                            <li>Service </li>
                        </ul>
                        
                    </div>
                    <div className='col-md-3 col-3'>
                    <div className={Classes.Head}>Policies</div>
                    <ul className={Classes.SubHead}>
                            <li>Terms of use </li>
                            <li>Privacy plolicy </li>
                            <li>Return policy </li>
                            <li>Site map </li>
                        </ul>
                        
                    </div>
                    <div className='col-md-3 col-3'>
                    <div className={Classes.Head}>Useful link</div>
                    <ul className={Classes.SubHead}>
                            <li>Payment method </li>
                            <li>Location we ship to </li>
                            <li>Estimate delivery time </li>
                            <li>Blogs </li>
                        </ul>
                        
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-3 footCont'>2023 green box.</div>
                    <div className='col-md-3'><BsFacebook color='#ffffff' size={20}/>&nbsp;&nbsp;<AiFillYoutube color='#ffffff' size={20}/>&nbsp;&nbsp;<AiOutlineTwitter color='#ffffff' size={20}/>&nbsp;&nbsp;<AiOutlineInstagram color='#ffffff' size={20}/>&nbsp;&nbsp;</div>
                </div>
            </div>

        </div>

    )
}
export default Footer
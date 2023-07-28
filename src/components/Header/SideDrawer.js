import React from 'react'
import Logo from '../../assets/Images/logMob.png'
import Classes from './Header.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const SideDrawer = (props) => {

    let attachedClass = [Classes.SideDrawer, Classes.Close]
    if (props.open) {
        attachedClass = [Classes.SideDrawer, Classes.Open]
    }


    return (
        <React.Fragment>
            <div className={attachedClass.join(' ')}>
                <div className='space' style={style.Border}>
                    <div className={Classes.Logo}>
                        <img src={Logo} alt='logo' />
                    </div>
                    <AiOutlineCloseCircle size={25} color='#797979' onClick={props.closed} className={Classes.CloseIcon} /><br />
                </div>
                <nav className={Classes.ListPad}>
                   <ul className={Classes.Links}>
                   <li>Home</li>
                    <li>Shop All</li>
                    <li>Special day</li>
                    <li>About us</li>
                   </ul>
                </nav>

            </div>
        </React.Fragment>
    )
}
const style = {
    Border: {
        marginRight: '0px',
        marginLeft: '0px'

    }
}
export default SideDrawer
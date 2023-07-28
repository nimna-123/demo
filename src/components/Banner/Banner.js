import React from 'react'
import Classes from './Banner.module.css'
const Banner = () =>{
    return(
        <div className={Classes.Banner}>
            <h3>ZERO WASTE <br/>LIVING</h3>
            <p> For the Eco Friendly future</p>
            <div className={Classes.Buttons}>
            <div className={`${Classes.Button} ${Classes.How}`}>How to order</div>
            <div className={`${Classes.Button} ${Classes.See}`}>See Categories</div>

            </div>
         

        </div>
    )
}
export default Banner
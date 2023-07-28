import React from 'react'
import Classes from './Count.module.css'
const Count = () =>{
    return(
       
             <div className={Classes.Counts}>
                 <div className='container-fluid'>
            
              <div className={`${'row'} ${Classes.Cards}`}>
              <div className={`${'col-md-4'} `}>
                <div className={Classes.Card}>
                <h4>34,56,000</h4>
                <p>Happy Customers  Who 
          Trusted us</p>

                </div>
                   


               
            </div>
            <div className='col-md-4'>
            <div className={Classes.Card}>
                    <h4>245,678+</h4>
                    <p>Zero Waste Product 
               Sold </p>
                    </div>


               
            </div>
            <div className={'col-md-4'}>
            <div className={Classes.Card}>
                    <h4>45,678kg</h4>
                    <p>Plastic Pollution Prevented
          in last 5 years</p>
                    </div>


               
            </div>

              </div>
               
           

        </div>
            
        </div>
       


    )
}
export default Count
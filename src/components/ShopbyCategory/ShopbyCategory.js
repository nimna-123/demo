import React from 'react'
import Classes from './ShopbyCategory.module.css'
import Carousel from "react-elastic-carousel";

const ShopbyCategory = () =>{
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    return(
        <React.Fragment>
        <div className={Classes.shopByCatg}>
            <h3>Shop by categories</h3>
            <Carousel breakPoints={breakPoints}>
                <div className={Classes.Card}>
                   <div className={Classes.catgBg1} >
                   <h5>plant pots</h5>
                  </div>
                </div>
                <div className={Classes.Card}>
                <div className={Classes.catgBg2} >
                <h5>Grocery Bags</h5>
                    </div>
                </div>
                <div className={Classes.Card}>
                <div className={Classes.catgBg3} >
                <h5>Kitchen & Cleaning</h5>
                    </div>
                </div>
                <div className={Classes.Card}>
                <div className={Classes.catgBg4} >
                <h5>Beau</h5>
                    </div>
                </div>
                <div className={Classes.Card}>
                <div className={Classes.catgBg1} >
                <h5>plant pots</h5>
                    </div>
                </div>
                <div className={Classes.Card}>
                <div className={Classes.catgBg2} >
                <h5>Grocery Bags</h5>
                    </div>
                </div>
                <div className={Classes.Card}>
                <div className={Classes.catgBg3} >
                <h5>plant pots</h5>
                    </div>
                </div>
              
                </Carousel>
        </div>
        <div className='container-fluid'>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-md-6'>
            <div className={Classes.Discription}>
                <h3>Every choice counts: Protect the<br/>
   environment starts with us</h3>
   <p>As individuals, we all have the power to make changes to protect the environment by reducing 
the use of plastic and choosing eco-friendly products. your actions can save earth’s resources 
and provide a better world for future generations.</p>
<div className='d-flex justify-content-center align-items-center'>
<div className={Classes.More}>Learn More</div>

</div>


</div>
</div>

            </div>
        </div>
       
        </React.Fragment>


    )
}
export default ShopbyCategory
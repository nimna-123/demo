import React from 'react'
import Classes from './ShopNow.module.css'
import Carousel from "react-elastic-carousel";
import Product1 from '../../assets/Images/product1.png'
import Product2 from '../../assets/Images/product2.png'
import Product3 from '../../assets/Images/product3.png'
import Product4 from '../../assets/Images/category4.png'
const ShopNow = () =>{
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    return(
        <div className={Classes.shopNow}>
            <h3>Shop Our Best Sellers</h3>
            <Carousel breakPoints={breakPoints}>
               
                <div className={Classes.Card}>
                  <div className='d-flex justify-content-center align-items-center'>
                   <img src={Product1} alt='product'/>
                   </div>
                   <h5>plant pots</h5>
                   <p>Min.60% off</p>
                </div>
                <div className={Classes.Card}>
                <div className='d-flex justify-content-center align-items-center'>
                   <img src={Product2} alt='product'/>
                   </div>
                   <h5>Hair care shampoo</h5>
                   <p>Min.60% off</p>
                </div>
                <div className={Classes.Card}>
                <div className='d-flex justify-content-center align-items-center'>
                   <img src={Product3} alt='product'/>
                   </div>
                   <h5>Storage box</h5>
                   <p>Min.60% off</p>
                </div>
                <div className={Classes.Card}>
                <div className='d-flex justify-content-center align-items-center'>
                   <img src={Product4} alt='product'/>
                   </div>
                   <h5>plant pots</h5>
                   <p>Min.60% off</p>
                </div>
                <div className={Classes.Card}>
                <div className='d-flex justify-content-center align-items-center'>
                   <img src={Product1} alt='product'/>
                   </div>
                   <h5>plant pots</h5>
                   <p>Min.60% off</p>
                </div>
                <div className={Classes.Card}>
                <div className='d-flex justify-content-center align-items-center'>
                   <img src={Product2} alt='product'/>
                   </div>
                   <h5>Hair care shampoo</h5>
                   <p>Min.60% off</p>
                </div>
                <div className={Classes.Card}>
                <div className='d-flex justify-content-center align-items-center'>
                   <img src={Product3} alt='product'/>
                   </div>
                   <h5>plant pots</h5>
                   <p>Min.60% off</p>
                </div>
              
                </Carousel>
        </div>

    )
}
export default ShopNow
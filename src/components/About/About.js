import React from 'react'
import Classes from './About.module.css'
const About = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-7'>
                    <h3 className={Classes.Head}>Green box’s choice over other <br />
                        eco-friendly product sites.</h3>

                </div>
                <div className='col-md-5'>
                    <p className={Classes.Content}>Green box offers eco-friendly products including
                        households items, personal care products, clothing and accessories which are designed to be sustainable and have a minimal impact on the environment  </p>
                    <div className={Classes.More}>Learn More</div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='col-md-7'>
            <div className={Classes.Video}>
              <iframe src='https://www.youtube.com/embed/qKioro6IkOM'
              
                allow='autoplay; encrypted-media'
                title='video' className={Classes.YTVideo} /></div>

            </div>
            </div>
            </div>

       

    )
}
export default About
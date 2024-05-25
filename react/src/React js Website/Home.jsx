import React from 'react'
const Home = ()=>{
    return<>
        <section id='header'>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>Grow your Business with <strong className='brand-name' style={{color:'rgb(151, 151, 255)'}}>AG</strong></h1>
                            <h2 className='my-3'>We are team of developers</h2>
                            <div className="mt-3">
                                <a href='' className='btn'>Get started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src="" alt="as" className='img-fluid animated'/>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Home;
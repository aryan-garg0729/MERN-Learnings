import React from 'react'
import Card from './Card';
import Sdata from '../Sdata'
const Service = ()=>{
    return<>
        <h1>Welcome to service page</h1>
        <div className="container-fluid ">
            <div className="row">
                <div className="col">
                {Sdata.map((val,ind)=>{
                    return <Card key={ind} img={val.imgsrc} title={val.title}/>
                })}
                </div>
            </div>
        </div>
        
    </>
}
export default Service;
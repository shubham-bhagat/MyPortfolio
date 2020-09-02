import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import './navbarCom/navbar.css';


import ProjectImg1 from './images/project.png';
import TourImg from './images/tourImg.png';
import EcommerceImg from './images/ecomImg.png';
import DataImg from './images/dataImg.png';


class Project extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="jumbotron backgnd"  style={{backgroundImage: "url(" + ProjectImg1 + ")"}}></div>
                <div className="container">
                    <h3 className="text-center" style={{color:"brown"}}>|</h3>
                    <h4 className="text-center" style={{fontFamily:"roboto",fontSize:"30px",fontWeight:"800",color:"brown"}}>Latest Works</h4>


                    <div className="card bg-dark text-white">
  <img className="card-img opac" src={EcommerceImg} alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title"></h5>
    <p className="card-text text-bottom text-center badge badge-success width_fix">E-commerce Website: Made with HTML5, CSS, Bootstrap, PHP, Javascript, SQL</p>
    <p className="card-text text-bottom text-center"> <button className=" btn-danger btnAllign" >View Project</button></p>
  </div>
</div>
               <br/>

<div className="card bg-dark text-white">
  <img className="card-img opac " src={TourImg}  alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title"></h5>
    <p className="card-text text-center badge badge-success width_fix">Tour and Travel Point:  Made with CSS, HTML5, Bootstrap, Javascript. It is only a frontened project</p>
    <p className="card-text text-bottom text-center"> <button className=" btn-danger btnAllign" >View Project</button></p>
  </div>
</div>

<br/>
<div className="card bg-dark text-white">
  <img className="card-img opac" src={DataImg} alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title"></h5>
    <p className="card-text text-center badge badge-success width_fix">Foods Sales Analysis:- Made with Tableau, Excel . Consist of Dashboard which help in analysis of sales.</p>
    <p className="card-text text-bottom text-center"> <button className=" btn-danger btnAllign" >View Project</button></p>
  </div>
</div>

<br/>

{/* <div className="card bg-dark text-white">
  <img className="card-img opac" src={ProjectImg2} alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title"></h5>
    <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text text-bottom text-center"> <button className=" btn-danger btnAllign" >View Project</button></p>
  </div>
</div> */}

                </div>
            </React.Fragment>
         );
    }
}
 
export default Project;
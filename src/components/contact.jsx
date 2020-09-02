import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ContactMe from './images/contactme.png';
import Navbar from'./navbarCom/navbar.jsx';
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar/>
                    
                <div className="container-fluid text-center">
               <div className="card" style={{border:"1px solid white"}}>
               <img className="card-img  " src={ContactMe} style={{height:"600px"}} alt="Card image"/>
               <div className="card-img-overlay">
                <div className="container-fluid" style={{border:"1px solid black",width:""}}>askhcb</div>   
                </div>
               </div>
               </div>
            </React.Fragment>
         );
    }
}
 
export default Contact;
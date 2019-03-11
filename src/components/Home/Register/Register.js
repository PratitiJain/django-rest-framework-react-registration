import React,{Component} from 'react';
import './Register.css';
import Logo from '../../../assets/logobw.png';
// import {Link} from 'react-router-dom';
class Form extends Component{
    render(){
        return(
            <div className="Register">
                <img src={Logo} className="RegisterLogo"/>
                <div className="TextSection col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h1 className="FormtextTitle">Turn into a Teacher<br/>Offer your Insight</h1>
                    <p className="RegisterText">With Eduiome,it has never been simpler to end up an instructor and promote your administrations. Acquire an extraordinary living and work for yourself !<br/><br/>
                    Give at home classes or secure web based showing positions understudies over our worldwide system.
                    At Eduiome, you can give private classes in more than 100 subjects (dialects, sports, music, workmanship, diversions, and scholastics).<br/><br/>
                    Everybody has the ability to educate, so join Eduiome, turn into an educator and offer your energy !</p>    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="Form">
                            <div>
                                <form action="https://api.formbucket.com/f/buk_yNzcmSIhLXKrDXoAHkxJ7DmC" method="post">
                                    <h1 className="TutorTitle">Tutor - Registration</h1>
                                    <input name="name" required="true" type="text" placeholder="Full Name" id="formInput"/>
                                    <input name="email" required="true" type="text" placeholder="Email" id="formInput"/>
                                    <input name="password" required="true" type="password" placeholder="Password" id="formInput"/>
                                    <input name="confpassword" required="true" type="password" placeholder="Confirm Password" id="formInput"/>
                                    <input name="contact" required="true" type="number" placeholder="Contact" id="formInput"/>
                                    <input name="location" type="Location" placeholder="Location" id="formInput"/>
                                    <input name="subject" type="text" placeholder="Subject" id="formInput"/>
                                    <input type="submit" id="formSubmit" value="Submit"/>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Form;
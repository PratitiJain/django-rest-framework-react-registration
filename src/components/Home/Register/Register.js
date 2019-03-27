import React,{Component} from 'react';
import './Register.css';
import Logo from '../../../assets/logobw.png';
import axios from 'axios';
import jQuery from 'jquery';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
console.log(csrftoken);
console.log("Hey prattu!");

// import {Link} from 'react-router-dom';
class Form extends Component{
    state={
        response :null
    }
    // componentDidMount= ()=>{
    //     axios.put('http://localhost:8000/edu_app/api/users/2/',this.state.response).then(res =>
    //         console.log(res.data)
    //     )
    //     // console.log("Mounted");
    // }
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
                                <form action="http://localhost:8000/edu_app/api/users/" method="post">
                                    <h1 className="TutorTitle">Tutor - Registration</h1>
                                    <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                                    <input name="username" required="true" type="text" placeholder="Username" id="formInput"/>
                                    <input name="first_name" required="true" type="text" placeholder="First Name" id="formInput"/>
                                    <input name="last_name" required="true" type="text" placeholder="Last Name" id="formInput"/>
                                    <input name="password1" required="true" type="password" placeholder="Password" id="formInput"/>
                                    <input name="password2" required="true" type="password" placeholder="Confirm Password" id="formInput"/>
                                    <input name="email" required="true" type="text" placeholder="Email" id="formInput"/>
                                    <input name="subject" type="text" placeholder="Subject" id="formInput"/>
                                    <input name="location" type="Location" placeholder="Location" id="formInput"/>
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
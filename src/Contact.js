import React from "react";
import './Contact.css';
function Contact(props){

    var stwidth = {width:"100%"};
    return(
        
        <>
        <div className="contact-box">
        <h1>{props.name}-{props.id.name}</h1>
        <h2>Hello {props.data[1]}</h2>
        <div style={ {color:"green"} }>
            <label style={stwidth} >Name</label>
            <input type="text" />
        </div>
        <div style={stwidth}>
            <label style={stwidth}>Email</label>
            <input type="mail" />
        </div>
        <div style={stwidth}>
            <label style={stwidth}>Message</label>
            <textarea />
        </div>
        <div style={stwidth}>
            <input type="submit" value="Send"/>
        </div>
        </div>
        </>
    )

}

export default Contact;
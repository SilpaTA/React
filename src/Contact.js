import React from "react";
import './Contact.css';
function Contact(props){

    return(
        <>
        <div className="contact-box">
        <h1>{props.name}-{props.id.name}</h1>
        <h2>Hello {props.data[1]}</h2>
        <div style={ {color:"green"} }>
            <label >Name</label>
            <input type="text" />
        </div>
        <div>
            <label>Email</label>
            <input type="mail" />
        </div>
        <div>
            <label>Message</label>
            <textarea />
        </div>
        <div>
            <input type="submit" value="Send"/>
        </div>
        </div>
        </>
    )

}

export default Contact;
import React from "react";
function Contact(){

    return(
        <>
        <div>
            <label>Name</label>
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
        </>
    )

}

export default Contact;
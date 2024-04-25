import React, {Component} from "react";
import axios from "axios";
class Form extends Component{
    constructor(){
        super();
        this.state = {
            fname : "",
            mailid : "",
            password: "",
        }
    }

    inputSet = (e)=>{

        this.setState({[e.target.name] : e.target.value})

    }
    register = (e) =>{
        e.preventDefault();
        var formdata = {
            uname: this.state.fname,
            mail : this.state.mailid,
            password:this.state.password
        };
        axios.post("http://localhost/api/api.php",formdata).then(response =>{
            if(response.data == 'Success'){
                alert('Success');
            }
            else{
                alert('Error');
            }
        })
    }
    render(){
        return(
            <> 
            <div className="container">
                <h2>Register</h2>
                <form>
                <div className="row">
                    <div className="col-6 form-group">
                        <input type="text" onChange={this.inputSet} name="fname" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col-6 form-group">
                        <input type="email" onChange={this.inputSet} name="mailid" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="col-6 form-group">
                        <input type="password" onChange={this.inputSet} name="password" className="form-control" placeholder="Phone Number"/>
                    </div>
                    <div className="col-6 form-group">
                        <button className="btn btn-primary" onClick={this.register}>Submit</button>
                    </div>
                </div>
                <p>{this.state.fname}</p>
                </form>
            </div>
            </>
        )
    }
        
    
}
export default Form;
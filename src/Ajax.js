import React, {Component} from "react";
import axios from "axios";
class Ajax extends Component{
    constructor(){
        super();
        this.state= {
            posts:[],
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            // console.log(response);
            this.setState({posts:response.data})
        })
    }

    render(){
        return(
            <>
            <p>Ajax with axios</p>
            <table className="table">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((itsm,key)=>{
                        return(
                            <tr key={key}>
                                <td>{itsm.id}</td>
                                <td>{itsm.title}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
            </>
        )
    }
}

export default Ajax;
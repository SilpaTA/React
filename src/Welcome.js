import React, {Component} from "react";

class Welcome extends Component{

    constructor(props){

        super(props); //Calling parent constructor
        this.state = {
            items: ["one","two","three"],
            users :[
                {name:"silpa",age:"30"},
                {name:"nandhu",age:"30"},
                {name:"chikku",age:"12"},
                {name:"appu",age:"30"},
                {name:"amal",age:"27"}

            ]
        };

    }

    render(){
        var list = this.state.items.map(function(item,key){
            return <li key={key}>{item}</li>
        })
        return(
            <>
            <div>
                <p>{this.props.title}</p>
            </div>
            <div><ul>
                {list}
                </ul>
                </div>
                <div>
                    <ul>
                        {
                            // this.state.items.map(function(item,key){
                            //     return <li>{item}</li>
                            // }) 
                            
                            this.state.items.map((item,key)=><li key={key}>{item}</li>)
                        }
          
                    </ul>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                        {this.state.users.map((itemuser,keyuser)=>
                        <tr>
                            <td>{itemuser.name}</td>
                            <td>{itemuser.age}</td>
                        </tr>
                        )}
                    </table>
                </div>
            </>
        )
    }
}

export default Welcome;


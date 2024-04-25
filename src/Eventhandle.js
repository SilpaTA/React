import React, {Component} from "react";


class Eventhandle extends Component{
    constructor(props){

        super(props);
        this.state = {
            counter: 0,
            enabled: false,
            textcontent: "null"
        };
    }
    increment=()=>{
        
        this.setState(
            (prev,props)=>( 
            {counter:prev.counter+1} 
            ) 
        );
        
       
    }
    decrement=()=>{
        
        this.setState(
            (prev,props)=>( 
            {counter:prev.counter-1} 
            ) 
        );
        
       
    }

    enablecheckbox=()=>{
        alert('checked');
        this.setState(
            (prev,props)=>(
                {
                    enabled:!prev.enabled
                }
            )

        );
    }
    textchange = (e)=>{
       
        this.setState({textcontent:e.target.value})
    }
    render(){
        return(
            <div>
                <input onChange={this.textchange} type="text" />

                <p>{this.state.textcontent}</p>

                <button onClick={()=>{alert('Clicked')}}>Class Method</button><br/>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <p>You are clicked {this.state.counter}</p>
                <p>
                    <label>Checked</label>
                    <input type="checkbox" onClick={this.enablecheckbox}/>
                </p>
                <p>Option {this.state.enabled?"enabled":"disabled"}</p>
                
            </div>
        )
    }
}
export default Eventhandle;
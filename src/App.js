import React, {Component} from 'react';
import './App.css';
import Ajax from './Ajax';
import Form from './form';
class Todo extends Component{

  constructor(props){
    super(props);
    this.state = {
      textchange: '',
      item : [],
    };
  }
  InputChange=(e)=>{
    
      this.setState({textchange:e.target.value})
     
    }
    adddata = (e)=>{
      let currenttxt = this.state.textchange;
      let currentitem = this.state.item;
      currentitem.push(currenttxt);
      this.setState({item:currentitem});
    }
    deleteitem = (i) =>{
      let currentitem = this.state.item;
      currentitem.splice(i,1);
      this.setState({item:currentitem});
    }


  render () {
    return (
      <>
      {/* <div className='header-sec'>
        <input type='text' id='inputitem' placeholder='Type here' onChange={this.InputChange}/>
        <button onClick={this.adddata}>Add</button>
        <ul>
          {this.state.item.map((itm, key)=> <li key={key}>{itm}{key}<button onClick={ () =>{this.deleteitem(key) }}>Delete</button></li> )}
        </ul>
      </div> */}
      <div>
        {/* <Ajax /> */}
        <Form />
      </div>
      </>
    );
  }

}



export default Todo;

import logo from './logo.svg';
import './App.css';
function greet(name){
  return(
    <h3>{name}</h3>
  )

}
function App() {
  var name = 'silpa';
  var age = '18';
  return (
    <div>
      <p>Welcom {name}</p> 
      {
        greet("Silpa")
      }
      <p>You are {age>=18? 'Eligible':'not eligible'} for voting</p>
    </div>
  );
}

export default App;

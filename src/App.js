import logo from './logo.svg';
import './App.css';
import { Header, Footer } from './Home';
import Contact from './Contact';
import Welcome from './Welcome';
import Counter from './Counter';
import Demo from './Demo';
import Eventhandle from './Eventhandle';
function greet(name){
  return(
    <h3>{name}</h3>
  )

}
function App() {
  var name = 'silpa';
  // var age = '18';
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <p>Welcom {name}</p>
      {/* {greet("Silpa")}
      <p>You are {age >= 18 ? 'Eligible' : 'not eligible'} for voting</p> */}
      <Contact id={{name:"Silpa"}} name="Contact Us" data={["Silpa", "Anandhu"]}/>
    </div>
    <div>
      <div>
        <p>Class Compontent</p>
        <Welcome title="Welcome to class component" />
      </div>
      <div>
        <p>Class State</p>
        <Counter />
      </div>
      <div>
        <Demo />
        <Eventhandle />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;

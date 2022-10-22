import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';


function App() {
  return (
    <div className="App">
        <h1>Arthur Henrique Alves Saturno</h1>
        <HelloWorld />
        <SayMyName nome="Arthur"/>
    </div>
  );
}

export default App;

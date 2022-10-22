import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Renderizar from './components/Renderizar';

function App() {

  return (
    <div className="App">
        <h1>Arthur Henrique Alves Saturno</h1>
        <HelloWorld />
        <SayMyName nome="Arthur"/>
        <Renderizar/>
    </div>
  );
}

export default App;

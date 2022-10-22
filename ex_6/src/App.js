import './App.css';

import Home from './components/pages/Home'
import Home2 from './components/pages/Home2'
import Navbar from './components/layout/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (   
      <Router customClass='min-height'>
        <Navbar />
        <Routes>
          <Route  exact path='/' element={<Home />} />
          <Route path='/home2' element={<Home2 />} />
        </Routes>       
      </Router>
  );
}

export default App;

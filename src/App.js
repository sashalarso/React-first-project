import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Pro from './components/Pro';


function App() {
  console.log("bojjour");
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='test' element={<Pro/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;

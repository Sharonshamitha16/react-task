import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './task-25-09-24/Navbar';

function App() {
  return (
    <div className="App">
       <Link  to={"/Navbar"}><Navbar/></Link>
    </div>
  );
}

export default App;

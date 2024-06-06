import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create.js';

function App() {

  return (
    <Router>
      <div className = "App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './screens/Details';
import Randomizer from './screens/Randomizer';
import Scorecard from './screens/Scorecard';


function App() {
  return (
    <>
      <Router>
          <div className="container">
            <Routes>
              <Route path='/' element={<Details />} />
              <Route path='/randomizer' element={<Randomizer />} />
              <Route path='/scorecard' element={<Scorecard />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;

import { AppContext } from './assets/contextAPI';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Videodetails from './components/Videodetails';

function App() {
  return (
    <AppContext>
      <Router>
        <div className='h-screen'>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={ <Feed/> } />
            <Route path='/video/:id' element={ <Videodetails/> } />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;


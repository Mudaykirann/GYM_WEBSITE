
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import LandingPage from './pages/LandingPage';
import ProgramsPage from './components/ProgramsPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/aboutus"
          element={<AboutPage />}
        />
        <Route path='/programs' element={<ProgramsPage />}></Route>
        <Route path='/contactus' element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

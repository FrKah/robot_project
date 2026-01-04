import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RobotArchitecture from './pages/RobotArchitecture';
import Algorithms from './pages/Algorithms';
import Code from './pages/Code';
import Media from './pages/Media';
import Team from './pages/Team';


function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robot-architecture" element={<RobotArchitecture />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/code" element={<Code />} />
          <Route path="/media" element={<Media />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App

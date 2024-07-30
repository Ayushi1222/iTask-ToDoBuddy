import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todobox from './components/Todobox';
import Footer from './components/footer'; // Ensure case matches your file
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<Todobox />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

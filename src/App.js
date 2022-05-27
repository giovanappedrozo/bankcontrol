import logo from './img/logo.png';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/pages/Home"
import NewExpense from './components/pages/NewExpense';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from "./components/layout/Footer";
import NewReturn from './components/pages/NewReturn';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/newexpense' element={<NewExpense />} />
          <Route exact path='/newreturn' element={<NewReturn />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
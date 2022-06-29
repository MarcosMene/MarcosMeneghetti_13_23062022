import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Transactions from "./pages/Transactions/Transactions";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/transactions/" element={<Transactions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

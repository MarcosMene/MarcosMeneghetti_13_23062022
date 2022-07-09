import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Transactions from "./pages/TransactionsTitles/TransactionsTitles";
import "./App.scss";
import NotFound from "./pages/NotFound/NotFound";
// import SignUp from "./pages/signup/Signup";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          {/* <Route path="/signup/" element={<SignUp />} /> */}
          <Route path="/profile/" element={<Profile />} />
          <Route path="/transactions/" element={<Transactions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

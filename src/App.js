import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";
function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/user/:id" element={<User />} />
          <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

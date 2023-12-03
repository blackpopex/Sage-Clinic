import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Footer from "./components/Footer";
import Visitors from "./components/pages/Visitors";
import Direction from "./components/pages/Direction";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfUse from "./components/pages/TermsOfUse";
import FrequentlyAskedQuestion from "./components/pages/FrequentlyAskedQuestion";
import BookAppointment from "./components/pages/BookAppointment";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Visitors" element={<Visitors />} />
          <Route path="/Direction" element={<Direction />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
          <Route
            path="/FrequentlyAskedQuestion"
            element={<FrequentlyAskedQuestion />}
          />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Routes>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsofUse" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

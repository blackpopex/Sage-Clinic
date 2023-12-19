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
import Feedback from "./components/pages/Feedback";
import Career from "./components/pages/Career";
import Testimonies from "./components/pages/Testimonies";
import OurStory from "./components/pages/OurStory";
import MissionVisionValues from "./components/pages/MissionVisionValues";
import MeetOurTeam from "./components/pages/MeetOurTeam";
import BacktoTopBTN from "./components/BacktoTopBTN";
import Whatsapp from "./components/Whatsapp";

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
          <Route path="/Feedback" element={<Feedback />} />
          <Route
            path="/FrequentlyAskedQuestion"
            element={<FrequentlyAskedQuestion />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Testimonies" element={<Testimonies />} />
          <Route path="/OurStory" element={<OurStory />} />
          <Route
            path="/MissionVisionValues"
            element={<MissionVisionValues />}
          />
          <Route path="/MeetOurTeam" element={<MeetOurTeam />} />
        </Routes>

        <Routes>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsofUse" element={<TermsOfUse />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
        <Footer />
      </Router>
      <div>
        <BacktoTopBTN />
      </div>

      <div>
        <Whatsapp />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Branding from "./components/Branding";
import FeatureExplanation from "./components/FeatureExplanation";
import Feedbacks from "./components/Feedbacks";
import FinancialOverview from "./components/FinancialOverview";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Trust from "./components/Trust";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Branding />
      <FinancialOverview />
      <Services />
      <FeatureExplanation />
      <Feedbacks />
      <Trust />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;

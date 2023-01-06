import "./App.css";
import Branding from "./components/Branding";
import FinancialOverview from "./components/FinancialOverview";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Branding />
      <FinancialOverview />
      <Services />
    </div>
  );
}

export default App;

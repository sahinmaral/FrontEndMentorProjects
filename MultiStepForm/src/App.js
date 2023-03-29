import { Route, Routes } from "react-router-dom";
import "./App.css";
import PersonalInfoForm from "./pages/PersonalInfoForm";
import PlanForm from "./pages/PlanForm";
import AddonsForm from "./pages/AddonsForm";
import SummaryPage from "./pages/SummaryPage";
import ConfirmPage from "./pages/ConfirmPage";
import Sidebar from "./components/Sidebar";
import NavigationButtons from "./components/NavigationButtons";

function App() {
  return (
    <>
      <div className="left-side-mobile">
        <Sidebar />
      </div>
      <div className="content">
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          <Routes>
            <Route path="/" element={<PersonalInfoForm />} />
            <Route path="/step-2" element={<PlanForm />} />
            <Route path="/step-3" element={<AddonsForm />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
          </Routes>
        </div>
      </div>

      <div className="navigation-buttons-mobile">
          <NavigationButtons />
      </div>
    </>
  );
}

export default App;

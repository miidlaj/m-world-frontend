import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login-page";
import MoreAppsPage from "./pages/more-apps/more-apps";
import NewExpensesRoutes from "./pages/new-expenses/new-expenses-routes";
import NewRevenuePage from "./pages/new-revenue/new-revenue-page";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <>
      <Router>
        <div className="font-poppins">
          <Routes>

            {/* FOR DEVELOPMENT ONLY */}
            <Route path="/" element={<HomePage/>} />

            {/* PAGES */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/more-apps" element={<MoreAppsPage />} />

            {/* NEW EXPENSES ROUTES */}
            <Route path="/new-expenses/*" element={<NewExpensesRoutes />} />

            {/* NEW REVENUE PAGE */}
            <Route path="/new-revenue" element={<NewRevenuePage />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";

function App() {
  return (
    <>
      <Router>
        <div className="font-poppins">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import { HashRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginpage/LoginPage";
import StudentDashboard from "./pages/dashboard/StudentDashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

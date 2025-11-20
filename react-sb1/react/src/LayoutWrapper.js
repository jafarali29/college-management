import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import StudentHome from "./StudentHome";
import Results from "./Results";
import About from "./About";
import Courses from "./Courses";
import SelectUser from "./SelectUser";
import StudentSignUp from "./StudentSignUp";
import ProtectedRoute from "./ProtectedRoute";
import StudentSignIn from "./StudentSignIn";
import AdminSignIn from "./AdminSignIn";
import AdminHome from "./AdminHome";
import AdminSignUp from "./AdminSignUp";
import Changes from "./Changes";

function LayoutWrapper() {
  const role=localStorage.getItem("role");
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/signUp" || location.pathname ==="/stdSignIn" || location.pathname==="/admSignIn";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="mt-4 pt-3">
        <Routes>
          <Route path="/" element={<SelectUser />} />
          <Route path="/stdSignIn" element={<StudentSignIn />} />
          <Route path="/admSignIn" element={<AdminSignIn />} />
          <Route path="/stuSignUp" element={<ProtectedRoute><StudentSignUp /></ProtectedRoute>} />
          <Route path="/admSignUp" element={<ProtectedRoute><AdminSignUp /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute>{role==="Admin"?<AdminHome />:<StudentHome />}</ProtectedRoute>} />
          <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path="/changes" element={<ProtectedRoute><Changes /></ProtectedRoute>} />
        </Routes>
      </div>
    </>
  );
}

export default LayoutWrapper;
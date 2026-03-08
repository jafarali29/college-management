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
import DeleteStudent from "./DeleteStudent";
import ViewStudent from "./ViewStudent";
import EditStudent from "./EditStudent";

function LayoutWrapper() {
  const role=localStorage.getItem("role");
  const location = useLocation();
  const hideNavbar = location.pathname === "/" || location.pathname === "/signUp" || location.pathname ==="/stdSignIn" || location.pathname==="/admSignIn";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="mt-5 pt-2">
        <Routes>
          <Route path="/" element={<SelectUser />} />
          <Route path="/stdSignIn" element={<StudentSignIn />} />
          <Route path="/admSignIn" element={<AdminSignIn />} />
          <Route path="/addStudent" element={<ProtectedRoute><StudentSignUp /></ProtectedRoute>} />
          <Route path="/addAdmin" element={<ProtectedRoute><AdminSignUp /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute>{role==="Admin"?<AdminHome />:<StudentHome />}</ProtectedRoute>} />
          <Route path="/getResult" element={<ProtectedRoute><Results /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path="/changes" element={<ProtectedRoute><Changes /></ProtectedRoute>} />
          <Route path="/deleteStudent" element={<ProtectedRoute><DeleteStudent/></ProtectedRoute>} />
          <Route path="/viewStudent" element={<ProtectedRoute><ViewStudent/></ProtectedRoute>} />
          <Route path="/editStudent" element={<ProtectedRoute><EditStudent/></ProtectedRoute>} />
        </Routes>
      </div>
    </>
  );
}

export default LayoutWrapper;
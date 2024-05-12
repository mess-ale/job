import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//home
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Privacy from "../Pages/Privacy";
import MainLayout from "../components/MainLayout";
//Performance
import InstructionalDesign from "../Pages/services/PERFORMANCE CONSULTING/PerformanceConsulting";
import PerformanceConsulting from "../Pages/services/PERFORMANCE CONSULTING/PerformanceConsulting";
import LearningTechnology from "../Pages/services/LEARNING TECHNOLOGIES/LearningTechnology";
import SmartLNDStaffing from "../Pages/services/PERFORMANCE CONSULTING/SmartLNDStaffing";
//services
import Services from "../Pages/services/Services";
import NeedsAnalysis from "../Pages/services/PERFORMANCE CONSULTING/NeedsAnalysis";
import PerformanceMapping from "../Pages/services/PERFORMANCE CONSULTING/PerformanceMapping";
import EvaluationAndMeasurement from "../Pages/services/PERFORMANCE CONSULTING/EvaluationAndMeasurement";
import DigitalLearning from "../Pages/services/INSTRUCTIONAL DESIGN/DigitalLearning";
import BlendedLearning from "../Pages/services/INSTRUCTIONAL DESIGN/BlendedLearning";
import ILTVILT from "../Pages/services/INSTRUCTIONAL DESIGN/ILTVILT";

//solutions
import Solutions from "../Pages/solutions/Solutions";
import LearningManagementSystems from "../Pages/solutions/LearningManagementSystems";
import LeadershipDevelopmentTraining from "../Pages/solutions/LeadershipDevelopmentTraining";
import HealthAndSafetyTraining from "../Pages/solutions/HealthAndSafetyTraining";
import EmployeeOnboarding from "../Pages/solutions/EmployeeOnboarding";
import SalesAndServiceTraining from "../Pages/solutions/SalsesAndServiceTraining";
//page not found
import NotFound from "../components/NotFound";
import ContactSuccess from "../components/ContactSuccess";
//theme
import theme from "../theme/ThemeProvider";
import { ThemeProvider } from "@emotion/react";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

const RoutesHandl = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Privacy" element={<Privacy />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="blog" element={<Blog />} />
        <Route path="logout" element={<Logout />} />
        <Route path="InstructionalDesign" element={<InstructionalDesign />} />
        <Route
          path="PerformanceConsulting"
          element={<PerformanceConsulting />}
        />
        <Route path="LearningTechnology" element={<LearningTechnology />} />
        <Route path="Services" element={<Services />} />
        <Route path="Solutions" element={<Solutions />} />
        <Route path="ContactSuccess" element={<ContactSuccess />} />

        <Route path="/service/*" element={<MainLayout />}>
          <Route path="NeedsAnalysis" element={<NeedsAnalysis />} />
          <Route path="PerformanceMapping" element={<PerformanceMapping />} />
          <Route
            path="EvaluationAndMeasurement"
            element={<EvaluationAndMeasurement />}
          />
          <Route path="SmartLNDStaffing" element={<SmartLNDStaffing />} />
          <Route path="DigitalLearning" element={<DigitalLearning />} />
          <Route path="BlendedLearning" element={<BlendedLearning />} />
          <Route path="ILTVILT" element={<ILTVILT />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/solutions/*" element={<MainLayout />}>
          <Route
            path="LearningManagement"
            element={<LearningManagementSystems />}
          />
          <Route
            path="LeadershipDevelopmentTraining"
            element={<LeadershipDevelopmentTraining />}
          />
          <Route
            path="HealthAndSafetyTraining"
            element={<HealthAndSafetyTraining />}
          />
          <Route path="EmployeeOnboarding" element={<EmployeeOnboarding />} />
          <Route
            path="SalesAndServiceTraining"
            element={<SalesAndServiceTraining />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default RoutesHandl;

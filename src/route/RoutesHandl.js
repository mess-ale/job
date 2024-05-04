import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Content from "../Pages/services/ContentCreationAndManagment";

import Customer from "../Pages/services/CustomerEngagement";
import Digtal from "../Pages/services/DigitalTechnology";
import MarketiongAndDesign from "../Pages/services/MarketiongAndDesign";
import Overview from "../Pages/services/Overview";
import StrategyAndAdvisory from "../Pages/services/StrategyAndAdvisory";
import Privacy from "../Pages/Privacy";
import MainLayout from "../components/MainLayout";
//Performance
import InstructionalDesign from "../Pages/PERFORMANCE_CONSULTING/InstructionalDesign";
import PerformanceConsulting from "../Pages/PERFORMANCE_CONSULTING/PerformanceConsulting";
import LearningTechnology from "../Pages/PERFORMANCE_CONSULTING/LearningTechnology";
import SmartLNDStaffing from "../Pages/PERFORMANCE_CONSULTING/SmartLNDStaffing";
//services
import Services from "../Pages/services/Services";

//solutions
import Solutions from "../Pages/solutions/Solutions";
import LearningManagementSystems from "../Pages/solutions/LearningManagementSystems";
import LeadershipDevelopmentTraining from "../Pages/solutions/LeadershipDevelopmentTraining";
import HealthAndSafetyTraining from "../Pages/solutions/HealthAndSafetyTraining";
import EmployeeOnboarding from "../Pages/solutions/EmployeeOnboarding";
import SalesAndServiceTraining from "../Pages/solutions/SalsesAndServiceTraining";

const RoutesHandl = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="Privacy" element={<Privacy />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="blog" element={<Blog />} />
      <Route path="InstructionalDesign" element={<InstructionalDesign />} />
      <Route path="PerformanceConsulting" element={<PerformanceConsulting />} />
      <Route path="LearningTechnology" element={<LearningTechnology />} />
      <Route path="SmartLNDStaffing" element={<SmartLNDStaffing />} />
      <Route path="Services" element={<Services />} />
      <Route path="Solutions" element={<Solutions />} />

      <Route path="/service/*" element={<MainLayout />}>
        <Route path="StrategyAndAdvisory" element={<StrategyAndAdvisory />} />
        <Route path="Overview" element={<Overview />} />
        <Route path="MarketiongAndDesign" element={<MarketiongAndDesign />} />
        <Route path="Digtal" element={<Digtal />} />
        <Route path="Customer" element={<Customer />} />
        <Route path="Content" element={<Content />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>

      <Route path="/solutions/*" element={<MainLayout />}>
        <Route path="LearningManagement" element={<LearningManagementSystems />} />
        <Route path="LeadershipDevelopmentTraining" element={<LeadershipDevelopmentTraining />} />
        <Route path="HealthAndSafetyTraining" element={<HealthAndSafetyTraining />} />
        <Route path="EmployeeOnboarding" element={<EmployeeOnboarding />} />
        <Route path="SalesAndServiceTraining" element={<SalesAndServiceTraining />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default RoutesHandl;

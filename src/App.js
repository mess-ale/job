import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Content from './Pages/services/ContentCreationAndManagment';
import Customer from './Pages/services/CustomerEngagement';
import Digtal from './Pages/services/DigitalTechnology';
import MarketiongAndDesign from "./Pages/services/MarketiongAndDesign";
import Overview from "./Pages/services/Overview";
import StrategyAndAdvisory from "./Pages/services/StrategyAndAdvisory";
import ComplianceAndRiskTraining from "./Pages/solutions/ComplianceAndRiskTraining";
import EmployeeOnboarding from "./Pages/solutions/EmployeeOnboarding";
import HealthAndSafetyTraining from "./Pages/solutions/HealthAndSafetyTraining";
import LeadershipDevelopmentTraining from "./Pages/solutions/LeadershipDevelopmentTraining";
import LearningManagement from './Pages/solutions/LearningManagementSystem';
import SalsesAndServiceTraining from "./Pages/solutions/SalsesAndServiceTraining";
import Blog from "./Pages/insights/Blog";
import FutureOfWork from "./Pages/insights/FutureOfWork";
import Microlearning from "./Pages/insights/Microlearning";
import Privacy from "./Pages/Privacy";
import MainLayout from './components/MainLayout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
        <Route path="/service" element={<MainLayout />}>
          <Route path="StrategyAndAdvisory" element={<StrategyAndAdvisory />} />
          <Route path="Overview" element={<Overview />} />
          <Route path="MarketiongAndDesign" element={<MarketiongAndDesign />} />
          <Route path="Digtal" element={<Digtal />} />
          <Route path="Customer" element={<Customer />} />
          <Route path="Content" element={<Content />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
        <Route path="/solutions" element={<MainLayout />}>
          <Route path="SalsesAndServiceTraining" element={<SalsesAndServiceTraining />} />
          <Route path="LearningManagement" element={<LearningManagement />} />
          <Route path="LeadershipDevelopmentTraining" element={<LeadershipDevelopmentTraining />} />
          <Route path="HealthAndSafetyTraining" element={<HealthAndSafetyTraining />} />
          <Route path="EmployeeOnboarding" element={<EmployeeOnboarding />} />
          <Route path="ComplianceAndRiskTraining" element={<ComplianceAndRiskTraining />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
        <Route path="/insights" element={<MainLayout />}>
          <Route path="Microlearning" element={<Microlearning />} />
          <Route path="FutureOfWork" element={<FutureOfWork />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
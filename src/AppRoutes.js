import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Courses from './pages/Courses';
import DashboardLayout from './components/DashboardLayout';
import { StudentDashboard, AdminDashboard } from './components/Dashboard';
import AuthWrapper from './components/AuthWrapper';
import TeachSection from './components/TeachSection';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthWrapper />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Route>
      <Route path="/courses" element={<Courses />} />
      <Route path="/teach" element={<TeachSection />} />
    </Routes>
  );
};

export default AppRoutes;







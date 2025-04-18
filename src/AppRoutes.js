import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Courses from './pages/Courses';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import TeachSection from './components/TeachSection';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/teach" element={<TeachSection />} />
    </Routes>
  );
};

export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './assets/styles/custom.css';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import ForgotPassword from './components/auth/ForgotPassword';
import Register from './components/auth/Register';
import Dashboard from './pages/Dashboard';
import Profile  from './pages/Profile';
import NotFound from './pages/NotFound';
import CreateClient from './components/clients/CreateClient';
import Clients from './components/clients/Clients';
import UpdateClient from './components/clients/UpdateClient';
import CreateAgency from './components/agency/CreateAgency';
import AgencyUsers from './components/agency/AgencyUsers';
import UpdateAgency from './components/agency/UpdateAgency';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import AppNavbar from './components/common/Navbar';

function App() {
  const sampleClient ={
    name: 'john',
    email: 'john@192example.com',
    phone: '123-456-789',
    address: '234 nairobi,kenya',

  };
  const sampleAgency = {
    name: 'agency1',
    address: '123 Nairobi,kenya',
    email: 'agency1@192example.com',
    phone: '123-456-789',
  }
  return (
    <AppProvider>
    <div>
      <AuthProvider>
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route
            path="/dashboard"element={
              <ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/update-client" element={<UpdateClient client={sampleClient} />} />
        <Route path="/create-agency" element={<CreateAgency />} />
        <Route path="/agency-users" element={<AgencyUsers />} />
        <Route path="/update-agency" element={<UpdateAgency agency={sampleAgency} />} />
        
        
      </Routes>
    </Router>
    
    </AuthProvider>
    </div>
    </AppProvider>
   
  );
}

export default App;
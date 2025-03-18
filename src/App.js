import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Páginas públicas
import Landing from './pages/Landing';
import Login from './pages/Login';

// Páginas protegidas
import Dashboard from './pages/Dashboard';
import AudienceSimulation from './pages/AudienceSimulation';
import ABTesting from './pages/ABTesting';
import TrendPrediction from './pages/TrendPrediction';
import PricingImpact from './pages/PricingImpact';
import AdPlatformOptimization from './pages/AdPlatformOptimization';
import InvestmentRisk from './pages/InvestmentRisk';
import MarketSegmentation from './pages/MarketSegmentation';
import SocialMediaIntegration from './pages/SocialMediaIntegration';
import SentimentAnalysis from './pages/SentimentAnalysis';

// Componentes de la aplicación protegida
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/audience-simulation" element={
            <PrivateRoute>
              <DashboardLayout>
                <AudienceSimulation />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/ab-testing" element={
            <PrivateRoute>
              <DashboardLayout>
                <ABTesting />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/trend-prediction" element={
            <PrivateRoute>
              <DashboardLayout>
                <TrendPrediction />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/pricing-impact" element={
            <PrivateRoute>
              <DashboardLayout>
                <PricingImpact />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/ad-platform" element={
            <PrivateRoute>
              <DashboardLayout>
                <AdPlatformOptimization />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/investment-risk" element={
            <PrivateRoute>
              <DashboardLayout>
                <InvestmentRisk />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/market-segmentation" element={
            <PrivateRoute>
              <DashboardLayout>
                <MarketSegmentation />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/social-media" element={
            <PrivateRoute>
              <DashboardLayout>
                <SocialMediaIntegration />
              </DashboardLayout>
            </PrivateRoute>
          } />
          <Route path="/sentiment-analysis" element={
            <PrivateRoute>
              <DashboardLayout>
                <SentimentAnalysis />
              </DashboardLayout>
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

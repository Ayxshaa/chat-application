import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';

const Hero = React.lazy(() => import('./pages/Hero'));
const About = React.lazy(() => import('./pages/About'));
const Features = React.lazy(() => import('./components/common/Features'));
const Teams = React.lazy(() => import('./components/common/Teams'));
const FAQ = React.lazy(() => import('./components/common/FAQ'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Modes = React.lazy(() => import('./components/common/Modes'));
const Login = React.lazy(() => import('./pages/auth/Login'));

// Home component that combines all the landing page sections
const Home = () => (
  <>
    <Hero />
    <About />
    <Features />
    <Teams />
    <FAQ />
  </>
);

// Layout component to conditionally render Navbar and Footer
// Layout component to conditionally render Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutPages = ['/register', '/login', '/modes']; // pages where you don't want Navbar/Footer

  const hideLayout = noLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={
                <Layout>
                  <Home />
                </Layout>
              } />

              <Route path="/register" element={
                <Layout>
                  <Register />
                </Layout>
              } />

              <Route path="/login" element={
                <Layout>
                  <Login />
                </Layout>
              } />
              <Route path="/modes" element={
                <Layout>
                  <Modes/>
                </Layout>
              } />
              
              
              {/* Add more routes here */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

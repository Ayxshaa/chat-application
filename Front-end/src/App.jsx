import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import Navbar from './layouts/navbar/Navbar';
import Footer from './layouts/footer/Footer';
import Loader from './components/ui/Loader';

const Hero = React.lazy(() => import('./pages/Hero'));
const About = React.lazy(() => import('./pages/About'));
const Features = React.lazy(() => import('./components/common/Features'));
const Teams = React.lazy(() => import('./components/common/Teams'));
const FAQ = React.lazy(() => import('./components/common/FAQ'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Modes = React.lazy(() => import('./components/common/Modes'));
const Login = React.lazy(() => import('./pages/auth/Login'));
const ContactPage = React.lazy(() => import('./pages/contactPage/ContactPage'));

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
const Layout = ({ children }) => {
  const location = useLocation();
  const noLayoutPages = ['/register', '/login', '/modes', '/contactpage']; // pages where you don't want Navbar/Footer
  
  const hideLayout = noLayoutPages.includes(location.pathname);
  
  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

// Simple spinner for route changes after initial load
const RouteChangeSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-12 h-12 border-4 border-primary-color border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  
  const handleLoaderComplete = () => {
    setInitialLoading(false);
  };
  
  return (
    <ThemeProvider>
      {initialLoading ? (
        // Sequential loader animation
        <Loader onLoadingComplete={handleLoaderComplete} />
      ) : (
        // Main app content after loader completes
        <Router>
          <div className="min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300">
            <Suspense fallback={<RouteChangeSpinner />}>
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
                
                <Route path="/contactpage" element={
                  <Layout>
                    <ContactPage />
                  </Layout>
                } />
                
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
};

export default App;
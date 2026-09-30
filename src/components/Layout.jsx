import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

/**
 * Main Layout Component
 * Wraps all application routes with sticky Navbar, main content outlet,
 * corporate Footer, and automatic scroll-to-top behavior on route transitions.
 */
export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content-link">
        Skip to main content
      </a>
      <Navbar />
      <main className="main-content" id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

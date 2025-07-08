import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import FloatingOrbs from './FloatingOrbs';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingOrbs />
      <main className="pb-20 relative z-10">
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
};

export default Layout;
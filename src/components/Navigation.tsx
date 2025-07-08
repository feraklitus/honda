import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Plus, Users, User, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();

  const navItems = [
    { to: '/', icon: Home, label: 'Ana Sayfa' },
    { to: '/journal', icon: BookOpen, label: 'Günlük' },
    { to: '/create', icon: Plus, label: 'Oluştur' },
    { to: '/community', icon: Users, label: 'Topluluk' },
    { to: '/profile', icon: User, label: 'Profil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-white/20 dark:border-gray-700/20">
      <div className="flex items-center justify-around px-4 py-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-purple-600 dark:text-purple-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-purple-500'
              }`
            }
          >
            {({ isActive }) => (
              <motion.div
                className="flex flex-col items-center"
                whileTap={{ scale: 0.95 }}
                animate={isActive ? { scale: 1.1 } : { scale: 1 }}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{label}</span>
                {isActive && (
                  <motion.div
                    className="w-1 h-1 bg-purple-600 dark:bg-purple-400 rounded-full mt-1"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
        
        <motion.button
          onClick={() => setIsDark(!isDark)}
          className="flex flex-col items-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="text-xs mt-1">Tema</span>
        </motion.button>
      </div>
    </nav>
  );
};

export default Navigation;
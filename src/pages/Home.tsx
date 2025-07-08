import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Star, Zap, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: Moon,
      title: 'Rüya Kaydet',
      description: 'Rüyalarınızı sesli veya yazılı olarak kaydedin',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'AI Görsel',
      description: 'Rüyalarınızı muhteşem görsellere dönüştürün',
      color: 'from-pink-500 to-blue-500',
    },
    {
      icon: Star,
      title: 'Yorum & Analiz',
      description: 'Çok kültürlü rüya yorumları alın',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Zap,
      title: 'Topluluk',
      description: 'Rüyalarınızı paylaşın ve keşfedin',
      color: 'from-purple-500 to-blue-500',
    },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 pt-8"
      >
        <motion.div
          className="inline-block mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Moon className="w-16 h-16 text-purple-600 dark:text-purple-400" />
        </motion.div>
        
        <h1 className="text-4xl font-bold dream-text-gradient mb-4">
          Rüya Dünyası
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">
          Rüyalarınızı keşfedin, görselleştirin ve anlamlarını öğrenin
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Link to="/create">
          <motion.div
            className="glass-effect rounded-2xl p-6 glow-effect cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Yeni Rüya Ekle</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Son rüyanızı kaydedin ve analiz edin
                </p>
              </div>
              <div className="w-12 h-12 dream-gradient rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-effect rounded-xl p-4 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Dreams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Son Rüyalar</h3>
          <Link 
            to="/journal" 
            className="text-purple-600 dark:text-purple-400 text-sm hover:underline"
          >
            Tümünü Gör
          </Link>
        </div>
        
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Uçan Rüya #{i}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  2 gün önce
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
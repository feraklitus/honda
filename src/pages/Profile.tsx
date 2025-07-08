import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Moon, Star, Heart, TrendingUp, Award, Calendar, Eye } from 'lucide-react';

const Profile: React.FC = () => {
  const stats = [
    { label: 'Toplam Rüya', value: '47', icon: Moon, color: 'from-purple-500 to-blue-500' },
    { label: 'Beğeni', value: '234', icon: Heart, color: 'from-pink-500 to-red-500' },
    { label: 'Takipçi', value: '89', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { label: 'Görüntülenme', value: '1.2K', icon: Eye, color: 'from-green-500 to-teal-500' },
  ];

  const achievements = [
    { title: 'İlk Rüya', description: 'İlk rüyanızı kaydettiniz', icon: Moon, earned: true },
    { title: 'Rüya Ustası', description: '10 rüya kaydettiniz', icon: Star, earned: true },
    { title: 'Topluluk Dostu', description: 'İlk rüyanızı paylaştınız', icon: Heart, earned: true },
    { title: 'Trend Yaratıcı', description: 'Rüyanız trend oldu', icon: TrendingUp, earned: false },
  ];

  const recentDreams = [
    {
      id: '1',
      title: 'Uçan Rüya',
      date: '2024-01-15',
      likes: 23,
      imageUrl: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: '2',
      title: 'Deniz Altı',
      date: '2024-01-14',
      likes: 18,
      imageUrl: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: '3',
      title: 'Orman Yolu',
      date: '2024-01-13',
      likes: 31,
      imageUrl: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <div className="min-h-screen p-6 pt-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="relative inline-block mb-4">
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Star className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-1">Rüya Gezgini</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Rüyalarımla dünyayı keşfediyorum ✨
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <motion.button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Profili Düzenle
          </motion.button>
          <motion.button
            className="glass-effect p-2 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-effect rounded-xl p-4 text-center"
          >
            <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <p className="text-2xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-2xl p-6 mb-8"
      >
        <div className="flex items-center mb-4">
          <Award className="w-6 h-6 text-yellow-500 mr-2" />
          <h3 className="text-xl font-semibold">Başarılar</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className={`p-4 rounded-xl border-2 transition-all ${
                achievement.earned
                  ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
                  : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/20 opacity-60'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                achievement.earned
                  ? 'bg-yellow-400 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500'
              }`}>
                <achievement.icon className="w-4 h-4" />
              </div>
              <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Dreams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-effect rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Son Rüyalarım</h3>
          <button className="text-purple-600 dark:text-purple-400 text-sm hover:underline">
            Tümünü Gör
          </button>
        </div>
        
        <div className="space-y-4">
          {recentDreams.map((dream, index) => (
            <motion.div
              key={dream.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center space-x-4 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={dream.imageUrl}
                alt={dream.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{dream.title}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(dream.date).toLocaleDateString('tr-TR')}
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {dream.likes}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Moon, Star, Heart, Zap } from 'lucide-react';

const Journal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mockDreams = [
    {
      id: '1',
      title: 'Uçan Rüya',
      date: '2024-01-15',
      mood: 'happy',
      symbols: ['uçmak', 'gökyüzü', 'özgürlük'],
      preview: 'Gökyüzünde uçuyordum, bulutların arasından geçiyordum...',
      imageUrl: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '2',
      title: 'Deniz Altı Macera',
      date: '2024-01-14',
      mood: 'mysterious',
      symbols: ['deniz', 'balık', 'keşif'],
      preview: 'Derin denizlerde yüzüyordum, renkli balıklar vardı...',
      imageUrl: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '3',
      title: 'Orman Yolculuğu',
      date: '2024-01-13',
      mood: 'peaceful',
      symbols: ['orman', 'ağaç', 'doğa'],
      preview: 'Yeşil bir ormanda yürüyordum, kuş sesleri duyuyordum...',
      imageUrl: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const moodIcons = {
    happy: { icon: Star, color: 'text-yellow-500' },
    mysterious: { icon: Moon, color: 'text-purple-500' },
    peaceful: { icon: Heart, color: 'text-green-500' },
    exciting: { icon: Zap, color: 'text-orange-500' },
  };

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'recent', label: 'Son 7 Gün' },
    { id: 'favorites', label: 'Favoriler' },
    { id: 'public', label: 'Paylaşılan' },
  ];

  return (
    <div className="min-h-screen p-6 pt-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold dream-text-gradient mb-2">
          Rüya Günlüğüm
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {mockDreams.length} rüya kaydedildi
        </p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4 mb-6"
      >
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rüyalarınızda arayın..."
            className="w-full pl-12 pr-4 py-3 glass-effect rounded-xl border border-white/30 dark:border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                selectedFilter === filter.id
                  ? 'bg-purple-500 text-white'
                  : 'glass-effect hover:bg-white/20 dark:hover:bg-gray-800/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Dreams List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        {mockDreams.map((dream, index) => {
          const MoodIcon = moodIcons[dream.mood as keyof typeof moodIcons]?.icon || Star;
          const moodColor = moodIcons[dream.mood as keyof typeof moodIcons]?.color || 'text-gray-500';

          return (
            <motion.div
              key={dream.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass-effect rounded-2xl p-4 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex space-x-4">
                {/* Dream Image */}
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={dream.imageUrl}
                    alt={dream.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dream Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg truncate">
                      {dream.title}
                    </h3>
                    <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                      <MoodIcon className={`w-5 h-5 ${moodColor}`} />
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {new Date(dream.date).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {dream.preview}
                  </p>

                  {/* Symbols */}
                  <div className="flex flex-wrap gap-2">
                    {dream.symbols.map((symbol) => (
                      <span
                        key={symbol}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full"
                      >
                        {symbol}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Empty State */}
      {mockDreams.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Moon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Henüz rüya yok</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            İlk rüyanızı kaydetmek için oluştur sayfasına gidin
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold">
            İlk Rüyamı Ekle
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Journal;
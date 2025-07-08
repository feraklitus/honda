import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Star, TrendingUp, Users, Globe } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const mockCommunityDreams = [
    {
      id: '1',
      title: 'Sonsuz Kütüphane',
      author: 'DreamExplorer',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Sonsuz koridorları olan dev bir kütüphanede kaybolmuştum. Her kitap farklı bir dünyaya açılıyordu...',
      imageUrl: 'https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 42,
      comments: 8,
      shares: 3,
      timeAgo: '2 saat önce',
      tags: ['kütüphane', 'kitap', 'sonsuzluk'],
    },
    {
      id: '2',
      title: 'Kristal Şehir',
      author: 'MysticDreamer',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Tamamen kristalden yapılmış bir şehirde yürüyordum. Işık kırılımları muhteşem renkler oluşturuyordu...',
      imageUrl: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 67,
      comments: 12,
      shares: 7,
      timeAgo: '5 saat önce',
      tags: ['kristal', 'şehir', 'ışık'],
    },
    {
      id: '3',
      title: 'Zaman Tüneli',
      author: 'TimeTraveler',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Farklı zaman dilimlerini gösteren bir tünelden geçiyordum. Geçmiş ve gelecek aynı anda görünüyordu...',
      imageUrl: 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 89,
      comments: 15,
      shares: 11,
      timeAgo: '1 gün önce',
      tags: ['zaman', 'tünel', 'geçmiş'],
    },
  ];

  const tabs = [
    { id: 'trending', label: 'Trend', icon: TrendingUp },
    { id: 'recent', label: 'Yeni', icon: Star },
    { id: 'following', label: 'Takip', icon: Users },
    { id: 'global', label: 'Global', icon: Globe },
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
          Rüya Topluluğu
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Dünya çapında rüyaları keşfedin ve paylaşın
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex space-x-2 mb-6 overflow-x-auto pb-2"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-purple-500 text-white'
                : 'glass-effect hover:bg-white/20 dark:hover:bg-gray-800/20'
            }`}
          >
            <tab.icon className="w-4 h-4 mr-2" />
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Community Dreams */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        {mockCommunityDreams.map((dream, index) => (
          <motion.div
            key={dream.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-effect rounded-2xl p-6"
          >
            {/* Author Info */}
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={dream.avatar}
                alt={dream.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{dream.author}</h4>
                <p className="text-sm text-gray-500">{dream.timeAgo}</p>
              </div>
              <button className="text-gray-400 hover:text-purple-500 transition-colors">
                <Share className="w-5 h-5" />
              </button>
            </div>

            {/* Dream Content */}
            <h3 className="text-xl font-semibold mb-3">{dream.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {dream.content}
            </p>

            {/* Dream Image */}
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={dream.imageUrl}
                alt={dream.title}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {dream.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-white/20 dark:border-gray-700/20">
              <div className="flex items-center space-x-6">
                <motion.button
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5" />
                  <span>{dream.likes}</span>
                </motion.button>

                <motion.button
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{dream.comments}</span>
                </motion.button>

                <motion.button
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <Share className="w-5 h-5" />
                  <span>{dream.shares}</span>
                </motion.button>
              </div>

              <motion.button
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yorumla
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <button className="glass-effect px-6 py-3 rounded-xl font-semibold hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all">
          Daha Fazla Yükle
        </button>
      </motion.div>
    </div>
  );
};

export default Community;
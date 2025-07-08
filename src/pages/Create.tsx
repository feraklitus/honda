import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Type, Sparkles, Save, Wand2 } from 'lucide-react';

const Create: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [inputMode, setInputMode] = useState<'text' | 'voice'>('text');
  const [dreamText, setDreamText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!dreamText.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
  };

  return (
    <div className="min-h-screen p-6 pt-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold dream-text-gradient mb-2">
          Rüya Oluştur
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Rüyanızı anlatın, AI ile görselleştirin
        </p>
      </motion.div>

      {/* Input Mode Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex bg-white/20 dark:bg-gray-800/20 rounded-xl p-1 mb-6"
      >
        <button
          onClick={() => setInputMode('text')}
          className={`flex-1 flex items-center justify-center py-3 rounded-lg transition-all ${
            inputMode === 'text'
              ? 'bg-white dark:bg-gray-700 shadow-md'
              : 'hover:bg-white/50 dark:hover:bg-gray-700/50'
          }`}
        >
          <Type className="w-5 h-5 mr-2" />
          Yazı
        </button>
        <button
          onClick={() => setInputMode('voice')}
          className={`flex-1 flex items-center justify-center py-3 rounded-lg transition-all ${
            inputMode === 'voice'
              ? 'bg-white dark:bg-gray-700 shadow-md'
              : 'hover:bg-white/50 dark:hover:bg-gray-700/50'
          }`}
        >
          <Mic className="w-5 h-5 mr-2" />
          Ses
        </button>
      </motion.div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-effect rounded-2xl p-6 mb-6"
      >
        {inputMode === 'text' ? (
          <div>
            <label className="block text-sm font-medium mb-3">
              Rüyanızı Anlatın
            </label>
            <textarea
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              placeholder="Rüyanızda neler gördünüz? Detaylı bir şekilde anlatın..."
              className="w-full h-40 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl border border-white/30 dark:border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <motion.button
              onClick={handleVoiceToggle}
              className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 mx-auto transition-all ${
                isRecording
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isRecording ? (
                <MicOff className="w-8 h-8 text-white" />
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </motion.button>
            <p className="text-lg font-medium mb-2">
              {isRecording ? 'Dinleniyor...' : 'Kayıt Başlat'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {isRecording 
                ? 'Rüyanızı anlatmaya başlayın' 
                : 'Mikrofon butonuna basarak kayda başlayın'
              }
            </p>
          </div>
        )}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <motion.button
          onClick={handleGenerate}
          disabled={!dreamText.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold flex items-center justify-center"
          whileTap={{ scale: 0.98 }}
        >
          {isGenerating ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 mr-2"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              AI Oluşturuyor...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5 mr-2" />
              Görsel Oluştur
            </>
          )}
        </motion.button>

        <motion.button
          className="w-full glass-effect border border-white/30 dark:border-gray-700/30 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
          whileTap={{ scale: 0.98 }}
        >
          <Save className="w-5 h-5 mr-2" />
          Taslak Kaydet
        </motion.button>
      </motion.div>

      {/* Generated Content Preview */}
      {isGenerating && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 glass-effect rounded-2xl p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Oluşturuluyor...</h3>
          <div className="space-y-4">
            <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded animate-pulse" />
            <div className="h-4 bg-gradient-to-r from-pink-200 to-blue-200 dark:from-pink-800 dark:to-blue-800 rounded animate-pulse w-3/4" />
            <div className="h-32 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded animate-pulse" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Create;
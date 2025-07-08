export interface Dream {
  id: string;
  title: string;
  content: string;
  audioUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  symbols: DreamSymbol[];
  interpretation: DreamInterpretation;
  mood: DreamMood;
  createdAt: Date;
  isPublic: boolean;
  tags: string[];
  musicUrl?: string;
}

export interface DreamSymbol {
  symbol: string;
  meaning: string;
  culture: 'western' | 'eastern' | 'jungian' | 'indigenous' | 'universal';
  confidence: number;
}

export interface DreamInterpretation {
  summary: string;
  archetypes: Archetype[];
  emotions: string[];
  themes: string[];
  culturalContext: CulturalContext[];
}

export interface Archetype {
  name: string;
  description: string;
  significance: string;
  type: 'shadow' | 'hero' | 'anima' | 'animus' | 'wise_old_man' | 'mother' | 'trickster';
}

export interface CulturalContext {
  culture: string;
  interpretation: string;
  significance: string;
}

export interface DreamMood {
  primary: string;
  secondary?: string;
  intensity: number; // 1-10
  colors: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  dreamCount: number;
  joinedAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  language: string;
  darkMode: boolean;
  notifications: boolean;
  publicProfile: boolean;
  culturalFocus: string[];
  astrology: boolean;
}

export interface DreamStats {
  totalDreams: number;
  commonSymbols: { symbol: string; count: number }[];
  moodTrends: { mood: string; count: number }[];
  recurringThemes: string[];
}
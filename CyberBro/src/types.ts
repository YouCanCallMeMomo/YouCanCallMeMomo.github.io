// ============================================
// SiagaSiber Youth System - Type Definitions
// Based on Class Diagram
// ============================================

export interface User {
  userID: string;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'admin';
}

export interface Student extends User {
  points: number;
  level: number;
  badges: Badge[];
  completedModules: string[];
  completedGames: string[];
  quizScores: QuizScore[];
}

export interface Module {
  moduleID: string;
  title: string;
  subtitle: string;
  content: string[];
  tips: string[];
  category: 'phishing' | 'social-engineering' | 'malware' | 'credential' | 'wifi' | 'defacement';
  icon: string;
  color: string;
  badgeReward: string;
  pointReward: number;
}

export interface MiniGame {
  gameID: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  icon: string;
  color: string;
  badgeReward: string;
  pointReward: number;
}

export interface Quiz {
  quizID: string;
  title: string;
  questions: Question[];
}

export interface Question {
  questionID: string;
  questionText: string;
  options: string[];
  correctAnswer: number;
  questionScore: number;
  explanation: string;
  category?: 'general' | 'forensic' | 'sqli';
}

export interface QuizScore {
  quizID: string;
  score: number;
  totalQuestions: number;
  date: string;
}

export interface Badge {
  badgeID: string;
  badgeName: string;
  description: string;
  icon: string;
  earnedAt?: string;
}

export interface Report {
  reportID: string;
  studentID: string;
  type: 'hacked' | 'cyberbullying' | 'scam' | 'other';
  description: string;
  date: string;
  status: 'submitted' | 'reviewed';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'cyberbro';
  text: string;
  timestamp: string;
}

export interface LeaderboardEntry {
  userID: string;
  name: string;
  points: number;
  level: number;
  badges: Badge[];
}

// Level titles
export const LEVEL_TITLES: Record<number, string> = {
  1: 'Newbie',
  2: 'Script Kiddie',
  3: 'Cyber Explorer',
  4: 'Cyber Warrior',
  5: 'Cyber Guardian',
  6: 'Cyber Legend',
};

export function getLevelFromPoints(points: number): number {
  if (points >= 2000) return 6;
  if (points >= 1500) return 5;
  if (points >= 1000) return 4;
  if (points >= 500) return 3;
  if (points >= 200) return 2;
  return 1;
}

export function getLevelTitle(level: number): string {
  return LEVEL_TITLES[level] || 'Newbie';
}

// All available badges
export const ALL_BADGES: Badge[] = [
  { badgeID: 'vault-breaker', badgeName: 'Vault Breaker', description: 'Selesaikan game Leaked Vault', icon: '' },
  { badgeID: 'web-guardian', badgeName: 'Web Guardian', description: 'Selesaikan game Defacement Scanner', icon: '' },
  { badgeID: 'chat-detective', badgeName: 'Chat Detective', description: 'Selesaikan game Chat Trap', icon: '' },
  { badgeID: 'forensic-investigator', badgeName: 'Digital Investigator', description: 'Selesaikan game Forensic Investigator', icon: '' },
  { badgeID: 'sqli-defender', badgeName: 'SQLi Defender', description: 'Selesaikan game SQLi Scanner', icon: '' },
  { badgeID: 'phishing-expert', badgeName: 'Phishing Expert', description: 'Selesaikan modul Phishing', icon: '' },
  { badgeID: 'social-shield', badgeName: 'Social Shield', description: 'Selesaikan modul Social Engineering', icon: '' },
  { badgeID: 'malware-hunter', badgeName: 'Malware Hunter', description: 'Selesaikan modul Malware & Virus', icon: '' },
  { badgeID: 'password-master', badgeName: 'Password Master', description: 'Selesaikan modul Pencurian Kredensial', icon: '' },
  { badgeID: 'wifi-warrior', badgeName: 'WiFi Warrior', description: 'Selesaikan modul Wi-Fi Publik', icon: '' },
  { badgeID: 'web-defender', badgeName: 'Web Defender', description: 'Selesaikan modul Web Defacement', icon: '' },
  { badgeID: 'quiz-champion', badgeName: 'Quiz Champion', description: 'Dapatkan skor sempurna di quiz', icon: '' },
  { badgeID: 'first-steps', badgeName: 'First Steps', description: 'Selesaikan modul pertama', icon: '' },
  { badgeID: 'gamer-pro', badgeName: 'Gamer Pro', description: 'Selesaikan semua mini-games', icon: '' },
];
